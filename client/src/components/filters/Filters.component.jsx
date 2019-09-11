import React from 'react';
import { FormGroup } from '..';

const Filters = ({ filterType = [], filtersToApply, handleFilterChange, applyFilters, clearFilter }) => {
  const handleChange = input => handleFilterChange(input);
  return (
    <div>
      <div className="filters">
        {filterType.map(filter => (
          <FormGroup
            classes={['filter-widget']}
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
