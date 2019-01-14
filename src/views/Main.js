import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Profile from './Profile';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogin: true
    }
  }

  
  logout = () => {
    window.Kakao.Auth.logout();
    this.setState({isLogin: false});
  }

  render() {
    if(!this.state.isLogin) return <Redirect to="/login" />
    return (
      <div>
        <Profile />
        로그인 했대요
        <button onClick={this.logout}>로그아웃 합시다</button>
        <button onClick={this.sendTest}>내게보내기 테스트</button>
      </div>
    )
  }
}

