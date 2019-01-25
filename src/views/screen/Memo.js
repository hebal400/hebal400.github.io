import React, { Component } from 'react';
import '../css/Memo.css';
import MeAppIcon from '../../images/me_appicon_kr.png';
import FooterButton from '../component/KakaoButton';

export default class Memo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memo: ''
    }
  }

  changeMemoState = event => {
    let memo = event.currentTarget.value;
    this.setState({ memo });
  }

  sendMemo = async () => {
    try {
      let res = 
      await window.Kakao.API.request({
        url: '/v2/api/talk/memo/default/send',
        data: {
          'template_object': {
            'object_type': 'text',
            'text': this.state.memo,
            'link': {
              'web_url': `https://hebal400.github.io/albatalk/`,
              'mobile_web_url': `https://hebal400.github.io/albatalk/`
            }
          }
        }
      })
      
      // 정상 전송 완료
      if(res['result_code'] === 0) {
        window.parent.postMessage({ message: 'sendNotification', text: '전송 완료 ~~ <\'^\'>'}, '*');
      }
    } catch (err) {
      console.log(err, '이에오');
    }
  }
  render() {
    return (
      <div className="memo-container">
        <div className="memo-textarea-container">
          <textarea className="memo-textarea" placeholder="여기에 메모를 입력하세요" onChange={this.changeMemoState} value={this.state.memo} />
        </div>
        <footer className="memo-footer">
          <FooterButton img={MeAppIcon} title="내게 보내기" onClick={this.sendMemo} />
        </footer>
      </div>
    )
  }
}
