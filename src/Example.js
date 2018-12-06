import './Example.css';
import React from 'react';

const Example = ({value}) => (
  <div className='example-container'>
    <h3>{value}</h3>
  </div>
);

export default Example;