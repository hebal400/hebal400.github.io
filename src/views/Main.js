import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state= {
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
        로그인 했대요
        <button onClick={this.logout}>로그아웃 합시다</button>
      </div>
    )
  }
}
