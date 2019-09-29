import React from 'react';
import Loader from 'react-loader-spinner';
import classNames from 'classnames';

export default ({ className }) => (
  <div className={classNames('loader-container', className)}>
    <Loader type="Oval" color="#00BFFF" height={100} width={100} />
  </div>
);
