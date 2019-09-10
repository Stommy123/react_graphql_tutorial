import React, { useReducer } from "react";
import { Input } from "..";

const InputGroup = ({ id, type, label, onChange, classes = [], defaultValue, group = [], multiSelect }) => {
  const initialState = { selected: defaultValue, selections: [] };
  const radioGroupReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(radioGroupReducer, initialState);
  const { selected, selections } = state;
  const handleSelect = ({ id: inputId, value }) => {
    let newSelection = selections;
    if (multiSelect) {
      const alreadySelected = selections.includes(inputId);
      if (alreadySelected) newSelection = selections.filter(el => el !== inputId);
      else newSelection.push(inputId);
    }
    setState({ selected: inputId, ...(multiSelect && { selections: newSelection }) });
    onChange && onChange({ id, value: multiSelect ? newSelection : value });
  };
  return (
    <div>
      <label>{label}</label>
      {group.map(({ id: inputId, display, value }) => (
        <Input
          label={display}
          value={value}
          id={inputId}
          onChange={handleSelect}
          isChecked={multiSelect ? selections.includes(inputId) : selected === inputId}
          type={type}
          classes={classes}
          selected={selected}
        />
      ))}
    </div>
  );
};

export default InputGroup;
