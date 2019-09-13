import React from "react";
import classNames from "classnames";

const InputDropdown = ({
  label,
  placeholder,
  id,
  value,
  onChange,
  required,
  className,
  defaultValue,
  options = []
}) => (
  <>
    <label>{label}</label>
    <select
      id={id}
      defaultValue={defaultValue}
      onChange={e => onChange({ id, value: e.target.value })}
      placeholder={placeholder}
      value={value}
      required={required}
      className={classNames("form-control", className)}
    >
      {options.map(({ id, display, value }) => (
        <option className={classNames("form-control", className)} id={id} value={value}>
          {display}
        </option>
      ))}
    </select>
  </>
);

export default InputDropdown;
