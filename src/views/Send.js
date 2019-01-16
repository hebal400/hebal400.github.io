import React, { Component } from 'react'

export default class Send extends Component {

  sendTest = async () => {
    try {
      let res = await window.Kakao.API.request({
        url: '/v2/api/talk/memo/send',
        data: {
          'template_id': 14322,
          'args': JSON.stringify({
            'title': "파워테스트",
            'description': "실화냐.."
          })
        }
      })
      console.log(res);
    } catch (err) {
      console.log(err, '이에오');
    }
  }

  render() {
        return (
        <div>
            로그인 했대요
            <button onClick={this.sendTest}>내게보내기 테스트</button>
        </div>
        )
  }
}
