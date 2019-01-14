import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './views/Login';
import Main from './views/Main';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin : false,    
    }
  }
  componentDidMount = () => this.isLogined();

  isLogined = () => {
    window.Kakao.Auth.getStatus(statusObj => {
      console.log(statusObj)
      let isLogin = statusObj.status === "connected" ? true : false;
      this.setState({ isLogin }, () => {
        console.log(this.state)
      });
    })
  }

  render() {
    return (
      <Login />
    );
  }
}

export default App;
