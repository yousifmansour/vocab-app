import './ModeLayer.css';
import React from 'react';
import InputHandler from './InputHandler.js';
import RandomWord from './RandomWord.js';

class ModeLayer extends React.Component {

  render() {
    let currentMode;
    if (this.props.currentMode === 'search') 
      currentMode = <InputHandler
        word={this.props.currentWord}
        handleInput={this.props.handleInput}/>
    else 
      currentMode = <RandomWord word={this.props.currentWord} handleInput={this.props.handleInput}/>

    return (
      <div className="mode-layer">
        <div>
          {currentMode}
        </div>
      </div>
    );
  }
}
export default ModeLayer;