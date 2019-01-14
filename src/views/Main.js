import React, { Component } from 'react'

export default class Main extends Component {

  logout = () => {
    window.Kakao.Auth.logout();
  }
  render() {
    return (
      <div>
        로그인 했대요
        <button onClick={this.logout}>로그아웃 합시다</button>
      </div>
    )
  }
}
