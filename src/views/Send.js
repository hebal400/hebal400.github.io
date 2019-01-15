import React, { Component } from 'react'

export default class Send extends Component {
  render() {
        return (
        <div>
            로그인 했대요
            <button onClick={this.sendTest}>내게보내기 테스트</button>
        </div>
        )
  }
}
