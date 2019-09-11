import React from 'react';
import classNames from 'classnames';

const EmptyContent = ({ text, subText, classes = [] }) => (
  <div className={classNames('empty-content', ...classes)}>
    <h3>{text}</h3>
    <h5>{subText}</h5>
  </div>
);

export default EmptyContent;
