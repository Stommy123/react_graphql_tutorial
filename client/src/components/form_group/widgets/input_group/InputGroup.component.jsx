import React, { useReducer } from 'react';
import { Input } from '..';

const InputGroup = ({ id, type, label, onChange, className, defaultValue, group = [], isMulti }) => {
  const initialState = { selected: defaultValue, selections: [] };
  const radioGroupReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(radioGroupReducer, initialState);
  const { selected, selections } = state;
  const handleSelect = ({ id: inputId, value }) => {
    let newSelection = selections;
    if (isMulti) {
      const alreadySelected = selections.includes(inputId);
      if (alreadySelected) newSelection = selections.filter(el => el !== inputId);
      else newSelection.push(inputId);
    }
    setState({ selected: inputId, ...(isMulti && { selections: newSelection }) });
    onChange && onChange({ id, value: isMulti ? newSelection : value });
  };
  return (
    <div>
      <label>{label}</label>
      {group.map(({ id: inputId, ...properties }) => (
        <Input
          {...properties}
          id={inputId}
          onChange={handleSelect}
          isChecked={isMulti ? selections.includes(inputId) : selected === inputId}
          type={type}
          className={className}
          selected={selected}
        />
      ))}
    </div>
  );
};

export default InputGroup;
