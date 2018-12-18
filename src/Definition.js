import './Definition.css';
import setUpDataModelDisplay from './HelperFunctions.js';
import React from 'react';

const Definition = ({value, id}) => {
  const element = setUpDataModelDisplay(value);
  return (
    <div>
      <h3>{id}{element}</h3>
    </div>
  );

};

export default Definition;