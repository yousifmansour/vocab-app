import React from 'react';
import PropTypes from 'prop-types';

import './DisplayDefinition.css';

class DisplayDefinition extends React.Component {
  static propTypes = {
    definition: PropTypes.string.isRequired,
    examples: PropTypes.arrayOf(PropTypes.object)
  }
  render() {
    let examples = '';
    if (this.props.examples) 
      examples = this.props.examples.map((ex, i) => {
        return (
          <div key={i}>
            <span>
              {ex.text}.
            </span>
            <br/>
          </div>
        );
      });
    return (
      <div className="definition-container">
        {this.props.definition
          ? <div>
              <h3>
                <strong>{this.props.definition}.</strong>
              </h3>
              <h4>Examples:</h4>
              {examples}
            </div>
          : null}
      </div>
    );
  }

}

export default DisplayDefinition;