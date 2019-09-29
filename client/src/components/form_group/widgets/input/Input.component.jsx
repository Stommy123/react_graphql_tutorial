import React from 'react';
import classNames from 'classnames';

const Input = ({ id, label, onChange, className, ...properties }) => (
  <>
    <label>{label}</label>
    <input
      id={id}
      className={classNames('form-control', className)}
      onChange={e => onChange({ id, value: e.target.value })}
      {...properties}
    />
  </>
);

export default Input;
