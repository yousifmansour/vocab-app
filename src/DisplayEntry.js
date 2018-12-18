import './DisplayEntry.css';

import React from 'react';
import PropTypes from 'prop-types';

import Definition from './Definition.js'
import Example from './Example.js';

class DisplayEntry extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    functionalLabel: PropTypes.string.isRequired,
    sensesArray: PropTypes
      .arrayOf(PropTypes.array)
      .isRequired
  }

  render() {
    let elements = [];
    let counter = 1; // counting # of defintions
    if (this.props.sensesArray) {
      this
        .props
        .sensesArray
        .forEach((element) => {
          element.forEach((def, i) => {
            if (def.text !== '') {
              elements.push(<Definition key={i} id={counter} value={def.text}/>);
              counter++;
            } else if (def.vis !== '') 
              elements.push(<Example key={i} value={def.vis}/>);
            }
          );
        });
    }

    return (
      <div className="entry-container">
        <h2 className="header">{this.props.id}) {this.props.functionalLabel}</h2>
        {elements}
      </div>
    );
  }
}

export default DisplayEntry;