import React from 'react';
import { Input, InputDropdown, InputGroup, Select } from './widgets';

const FormGroup = props => {
  const Component = {
    input: Input,
    dropdown: InputDropdown,
    group: InputGroup,
    select: Select
  }[props.widget];
  return (
    <div className="form-group">
      <Component key={props.id} {...props} />
    </div>
  );
};

export default FormGroup;
