import React from 'react';
import classNames from 'classnames';

const Icon = ({ onClick, icon, className }) => (
  <i onClick={_ => onClick && onClick()} className={classNames(className, 'icn-logo material-icons')}>
    {icon}
  </i>
);

export default Icon;
