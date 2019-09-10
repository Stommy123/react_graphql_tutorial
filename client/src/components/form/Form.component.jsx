import React, { useReducer } from "react";
import { FormGroup } from "..";

const Form = ({ schema: { id, fields = [], formHeading, submitText } = {}, handleSubmit }) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field.id] = String();
    return acc;
  }, {});
  const formReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(formReducer, initialState);
  const handleInputChange = ({ id, value }) => setState({ [id]: value });
  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(state);
  };
  return (
    <form onSubmit={onSubmit} id={id}>
      <h1 className="display-4 m-b-2">{formHeading}</h1>
      {fields.map(field => (
        <FormGroup {...field} onChange={handleInputChange} value={state[field.id]} />
      ))}
      <button className="btn btn-primary" type="submit">
        {submitText}
      </button>
    </form>
  );
};

export default Form;
