import React from "react";
import { Input, InputDropdown, InputGroup, FileInput, TextArea } from "./wigets";
const FormGroup = props => {
  const Component = {
    input: Input,
    dropdown: InputDropdown,
    group: InputGroup,
    file: FileInput,
    text: TextArea,
  }[props.widget];
  return (
    <div className="form-group">
      <Component {...props} />
    </div>
  );
};

export default FormGroup;
