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
      entries: [],
      currentWord: '',
      currentMode: 'learn',
      status: ''
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
        entries: [],
        currentWord: ''
      }, () => {        
        let url = 'https://dictionaryapi.com/api/v3/references/collegiate/json/<WORD>?key=51ea8a10-' +
            '9f05-41e9-9adb-fff0f8785ac7';
        fetch(url.replace('<WORD>', input)).then((data) => data.json()).then((data) => {
          this.parseResult(data, input);
        }).catch((e) => {
          this.setState({entries: [], currentWord: input, status: 'not found'});
        });
      });

    } else {
      alert('Enter something');
    }
  }

  parseResult(data, input) {
  
    let entries = [];
    let sensesArray;
    let senses;

    data.forEach((entry) => {
      sensesArray = [];
      let fl = entry.fl;
      entry
        .def
        .forEach((def) => {
          def
            .sseq
            .forEach((sseq) => {

              senses = [];
              sseq.forEach((sense) => {
                if (sense[0] !== 'sense') 
                  return;
                
                let dt = sense[1].dt;

                dt.forEach((element) => {
                  let text = '';
                  let vis = '';
                  if (element[0] === 'text') 
                    text = element[1];
                  if (element[0] === 'vis') 
                    vis = element[1][0].t;
                  senses.push({text, vis});
                });
                sensesArray.push(senses);
              });
            });
        });

      entries.push({sensesArray, fl});
    });    
    this.setState({entries, currentWord: input, status: 'found'});
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

        <DisplayDefinition entries={this.state.entries}/>
      </div>
    );
  }
}

export default App;
