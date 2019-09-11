import React, { useState } from 'react';
import classNames from 'classnames';
import AsyncSelect from 'react-select/async';
import ReactSelect from 'react-select';

const Search = ({ id, async, isMulti, loadOptions, onChange, onInputChange, label, placeholder, options = [] }) => {
  const [active, setActive] = useState(false)
  const handleFocus = _ => setActive(true)
  const handleBlur = _ => setActive(false);
  const handleInputChange = input => onInputChange && onInputChange(input)
  const handleChange = value => {
    onChange && onChange({ id, value })
    setActive(false)
  };
  const customStyles = _ => ({
    dropdownIndicator: base => ({
      ...base,
      transition: 'all .2s ease',
    })
  })
  const customComponents = _ => ({
    DropdownIndicator: _ => <i className="search icn-logo material-icons">search</i>
  })
  const emptyOptions = ({ inputValue }) => <div>{inputValue ? 'No Results Found' : 'Type To Search'}</div>
  const Select = async ? AsyncSelect : ReactSelect
  return (
    <>
    {label && <label>{label}</label>}
    <Select
      placeholder={placeholder}
      components={customComponents()}
      customStyles={customStyles()}
      classNamePrefix="select"
      className={classNames('react-select', { active })}
      noOptionsMessage={emptyOptions}
      isSearchable 
      isMulti={isMulti}
      loadOptions={loadOptions} 
      options={options}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onInputChange={handleInputChange} 
      onChange={handleChange} 
      />
    </>
  )
}

export default Search;

