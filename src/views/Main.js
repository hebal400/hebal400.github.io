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
    console.log(encodeURIComponent('파워테스트'));
  }

  
  kakaoLogOut = () => {
    window.Kakao.Auth.logout();
    this.setState({isLogin: false});
  }

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

