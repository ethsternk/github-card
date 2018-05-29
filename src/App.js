import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    user: {},
    active: false
  }
  
  handleClick = () => {
    fetch('https://api.github.com/users/inktivate')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.setState( {user: json} )
      if (this.state.active) {
        this.setState( {active: false} )
      } else {
        this.setState( {active: true} )
      }
    });

  }

  render() {

    const active = this.state.active;

    const info = active ? (
      <div id="App">
        <button onClick={this.handleClick}>close</button>
        <img src={this.state.user.avatar_url} />
        <p id="name">{this.state.user.name}</p>
        <p id="page">{this.state.user.login} | <a href={this.state.user.html_url}>{this.state.user.html_url}</a></p>
      </div>
    ) : (
      <div id="App">
        <button onClick={this.handleClick}>open</button>
      </div>
    )

    return (
      <div>
        {info}
      </div>
    );
  }
}

export default App;
