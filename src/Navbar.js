import './Navbar.css';

import React from 'react';

class Navbar extends React.Component {

  handleClick(e) {
    e.preventDefault();
    this
      .props
      .updateMode(e.target.id);
  }

  render() {
    return (
      <div className='navbar-container'>
        <nav>
          <div
            id='learn'
            onClick={(e) => {
            this.handleClick(e)
          }}
            className={this.props.selected === 'learn'
            ? 'selected'
            : null}>
            <h1 id='learn'>Learn words</h1>
          </div>
          <div
            id='search'
            onClick={(e) => {
            this.handleClick(e)
          }}
            className={this.props.selected === 'search'
            ? 'selected'
            : null}>
            <h1 id='search'>Search words</h1>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;