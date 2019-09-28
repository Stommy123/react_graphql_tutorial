import React, { Component } from 'react';
import classNames from 'classnames';
import debounce from 'debounce-promise';
import { Icon } from '..';
import ReactSelect from 'react-select';
import AsyncSelect from 'react-select/async';

class Search extends Component {
  constructor(props) {
    super(props);
    const loadOptions = inputValue => props.loadOptions(inputValue);
    this.debouncedLoadOptions = debounce(loadOptions, 1000, { leading: true });
    this.state = { active: false };
  }
  handleFocus = _ => this.setState({ active: true });
  handleBlur = _ => this.setState({ active: false });
  handleInputChange = input => {
    const { onInputChange } = this.props;
    return onInputChange ? onInputChange(input) : input;
  };
  handleChange = value => {
    const { id, onChange } = this.props;
    onChange && onChange({ id, value });
    this.selectRef.blur();
  };
  customStyles = _ => ({
    dropdownIndicator: base => ({
      ...base,
      transition: 'all .2s ease'
    })
  });
  customComponents = _ => ({
    DropdownIndicator: _ => <Icon className="search" icon="search" />
  });
  emptyOptions = ({ inputValue }) => <div>{inputValue ? 'No Results Found' : 'Type To Search'}</div>;
  render() {
    const { active } = this.state;
    const { async, isMulti, label, placeholder, options = [], className, value } = this.props;
    const Select = async ? AsyncSelect : ReactSelect;
    return (
      <>
        {label && <label>{label}</label>}
        <Select
          ref={ref => (this.selectRef = ref)}
          placeholder={placeholder}
          components={this.customComponents()}
          customStyles={this.customStyles()}
          classNamePrefix="select"
          className={classNames('react-select', className, { active })}
          noOptionsMessage={this.emptyOptions}
          isSearchable
          isMulti={isMulti}
          loadOptions={this.debouncedLoadOptions}
          options={options}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onInputChange={this.handleInputChange}
          onChange={this.handleChange}
          value={value}
          isClearable
        />
      </>
    );
  }
}

export default Search;
