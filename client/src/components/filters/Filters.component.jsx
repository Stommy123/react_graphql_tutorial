import React, { useState } from 'react';
import classNames from 'classnames';
import { FormGroup } from '..';

const Filters = ({ filterType = [], onApplyFilters, onClearFilters, className }) => {
  const [filtersToApply, setFiltersToApply] = useState({});
  const handleFilterChange = ({ id, value }) => setFiltersToApply({ ...filtersToApply, [id]: value });
  const handleClearFilters = _ => {
    setFiltersToApply({});
    onClearFilters();
  };
  const handleApplyFilters = _ => onApplyFilters(filtersToApply);
  return (
    <div>
      <div className={classNames('filters', className)}>
        {filterType.map(filter => (
          <FormGroup
            className="filter-widget"
            key={filter.id}
            {...filter}
            onChange={handleFilterChange}
            value={filtersToApply[filter.id] || String()}
          />
        ))}
      </div>
      <div className="filter-outcomes">
        <button onClick={handleClearFilters} className="btn btn-info-outline">
          Clear Filters
        </button>
        <button onClick={handleApplyFilters} className="btn btn-info-outline">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
