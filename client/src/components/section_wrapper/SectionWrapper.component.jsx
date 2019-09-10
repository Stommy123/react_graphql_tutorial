import React from 'react';
import classNames from 'classnames';

const SectionWrapper = ({ className, columnDefs, rowDefs, children }) => (
  <div className={classNames("main", "container", className)}>
    <div className={classNames('row', rowDefs)}>
      <div className={columnDefs}>{children}</div>
    </div>
  </div>
);

export default SectionWrapper;
