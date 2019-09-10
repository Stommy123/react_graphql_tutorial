import React, { useState } from 'react';
import classNames from 'classnames';
import AsyncSelect from 'react-select/async';

const Search = ({ loadOptions, handleChange, handleInputChange }) => {
  const [active, setActive] = useState(false)
  const handleFocus = _ => setActive(true)
  const handleBlur = _ => setActive(false);
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
  return (
    <AsyncSelect 
        components={customComponents()}
        customStyles={customStyles()}
        classNamePrefix="select"
        className={classNames('react-select', { active })}
        noOptionsMessage={emptyOptions}
        isSearchable 
        loadOptions={loadOptions} 
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInputChange={handleInputChange} 
        onChange={handleChange} 
      />
  )
}

export default Search;

