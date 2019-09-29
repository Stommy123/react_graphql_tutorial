import React from 'react';
import classNames from 'classnames';

const InputDropdown = ({ label, id, onChange, className, options = [], ...properties }) => (
  <>
    <label>{label}</label>
    <select
      id={id}
      onChange={e => onChange({ id, value: e.target.value })}
      className={classNames('form-control', className)}
      {...properties}>
      {options.map(({ display, ...properties }) => (
        <option className={classNames('form-control', className)} {...properties}>
          {display}
        </option>
      ))}
    </select>
  </>
);

export default InputDropdown;
