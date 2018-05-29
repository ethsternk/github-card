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
      console.log(json);
    });

  }

  render() {
    return (
      <div id="App">
        <button onClick={this.handleClick}>click for cookies</button>
        <p id="name">{this.state.user.name}</p>
        <p id="username">{this.state.user.login}</p>
        <p id="page">GitHub: <a href={this.state.user.html_url}>{this.state.user.html_url}</a></p>
        <img src={this.state.user.avatar_url} />
      </div>
    );
  }
}

export default App;
