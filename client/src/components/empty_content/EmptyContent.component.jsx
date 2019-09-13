import React from 'react';
import classNames from 'classnames';

const EmptyContent = ({ text, subText, className }) => (
  <div className={classNames('empty-content', className)}>
    <h3>{text}</h3>
    <h5>{subText}</h5>
  </div>
);

export default EmptyContent;
