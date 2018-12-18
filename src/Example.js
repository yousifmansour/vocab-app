import './Example.css';
import React from 'react';
import setUpDataModelDisplay from './HelperFunctions.js';

const Example = ({value}) => {
  const element = setUpDataModelDisplay(value);
  return (
    <div className='example-container'>
      <h3>{element}</h3>
    </div>
  )
};

export default Example;