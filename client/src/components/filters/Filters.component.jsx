import React from 'react';
import classNames from 'classnames';
import { FormGroup } from '..';

const Filters = ({ filterType = [], filtersToApply, handleFilterChange, applyFilters, clearFilter, className }) => {
  const handleChange = input => handleFilterChange(input);
  return (
    <div>
      <div className={classNames('filters', className)}>
        {filterType.map(filter => (
          <FormGroup
            className='filter-widget'
            key={filter.id}
            {...filter}
            onChange={handleChange}
            value={filtersToApply[filter.id] || String()}
          />
        ))}
      </div>
      <div className="filter-outcomes">
        <button onClick={clearFilter} className="btn btn-info-outline">
          Clear Filters
        </button>
        <button onClick={applyFilters} className="btn btn-info-outline">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
