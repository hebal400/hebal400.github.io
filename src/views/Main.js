import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Main.css';
import Profile from './Profile';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogin: true
    }
  }

  
  kakaoLogOut = () => {
    window.Kakao.Auth.logout();
    this.setState({isLogin: false});
  }

  render() {
    if(!this.state.isLogin) return <Redirect to="/login" />
    return (
      <div>
        <Profile kakaoLogOut={this.kakaoLogOut} />
        로그인 했대요
        <button onClick={this.sendTest}>내게보내기 테스트</button>
      </div>
    )
  }
}

