import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './views/Login';
import Main from './views/Main';
import Loading from './views/component/Loading';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount = () => this.isLogined();

  isLogined = () => {
    window.Kakao.Auth.getStatus(statusObj => {
      let isLogin = statusObj.status === "connected" ? true : false;
      this.setState({ isLogin });
    })
    
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Loading isAuthed={this.state.isLogin} />} />
          <Route path="/login" component={() => <Login changeAuth={this.changeAuth}/>} />
          <Route path="/send" component={() => <Main changeAuth={this.changeAuth}/>} />  
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
