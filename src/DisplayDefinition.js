import './DisplayDefinition.css';

import React from 'react';
import PropTypes from 'prop-types';
import DisplayEntry from './DisplayEntry.js';

class DisplayDefinition extends React.Component {

  static propTypes = {
    entries: PropTypes
      .arrayOf(PropTypes.object)
      .isRequired
  }

  render() {

    let entries = [];
    if (this.props.entries[0]) {
      // create a component for display an entry
      entries = this
        .props
        .entries
        .map((entry, i) => {
          const functionalLabel = entry.fl;
          const sensesArray = entry.sensesArray;
          return <DisplayEntry
            key={i}
            id={i + 1/* like 3)verb */}
            functionalLabel={functionalLabel}
            sensesArray={sensesArray}/>;
        });
    }

    for (let i = 0; i < entries.length; i++) {}

    return (
      <div className="definition-container">
        {entries}
      </div>
    );
  }

}

export default DisplayDefinition;