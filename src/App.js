import './App.css';
import './styles.css';

import React, {Component} from 'react';
import Navbar from './Navbar.js';
import DisplayDefinition from './DisplayDefinition.js';
import ModeLayer from './ModeLayer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      examples: [],
      definition: '',
      currentWord: '',
      currentMode: 'learn'
    }
    this.handleInput = this
      .handleInput
      .bind(this);

    this.updateMode = this
      .updateMode
      .bind(this);
  }

  handleInput(input) {
    if (input && input.length >= 1) {
      this.setState({
        currentWord: '',
        definition: '',
        examples: []
      }, () => {
        let url = 'https://dictionaryapi.com/api/v3/references/collegiate/json/<WORD>?key=51ea8a10-' +
            '9f05-41e9-9adb-fff0f8785ac7';
        fetch(url.replace('<WORD>', input)).then((data) => data.json()).then((data) => {
          this.parseResult(data, input);
        }).catch((e) => {
          this.setState({definition: 'not found', examples: [], currentWord: input});
        });
      });

    } else {
      alert('Enter something');
    }
  }

  parseResult(data, input) {
    console.log((data));
    
    const definition = data[0].shortdef[0];
    
    // const examples = data.results[0].lexicalEntries[0].entries[0].senses[0].examples;
    const examples = [];
    this.setState({definition, examples, currentWord: input});
  }

  updateMode(mode) {
    if (mode === 'learn') 
      this.setState({currentMode: 'learn'});
    else if (mode === 'search') 
      this.setState({currentMode: 'search'});
    else {
      alert('Something was wrong.');
      alert(mode);
    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar updateMode={this.updateMode} selected={this.state.currentMode}/>

        <ModeLayer
          currentWord={this.state.currentWord}
          handleInput={this.handleInput}
          currentMode={this.state.currentMode}/>

        <DisplayDefinition
          definition={this.state.definition}
          examples={this.state.examples}/>

      </div>
    );
  }
}

export default App;
