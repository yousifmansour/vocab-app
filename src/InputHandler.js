import React from 'react';
import './InputHandler.css';

class InputHandler extends React.Component {
  constructor(props) {
    super(props);

    const initalWord = this.props.word;

    this.state = {
      input: initalWord
    }

    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this
      .props
      .handleInput(this.state.input);
  }

  render() {
    return (
      <div className="input-container">
        <form onSubmit={this.handleSubmit}>
          <h2>Lookup word</h2>
          <input
            onChange={(e) => this.setState({input: e.target.value})}
            name="word"
            value={this.state.input}
            placeholder="someword"></input>
          <button type="submit">Go</button>
        </form>
      </div>
    );
  }
}

export default InputHandler;