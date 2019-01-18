import React, { Component } from 'react'
import { getParsedData } from '../actions';

export default class Send extends Component {

  constructor(props) {
    super(props);

    this.state = {
      test:'안들어왔어요'
    }
  }

  componentDidMount = () => {
    // 테스트용
    getParsedData((data) => {
      console.log(data);
      if(data.result) {
        this.setState({
          test: data.parsedData.title
        })
      }
      
    });
  }

  sendTest = async () => {
    try {
      // let res = await window.Kakao.API.request({
      //   url: '/v2/api/talk/memo/send',
      //   data: {
      //     'template_id': 14322,
      //     'args': JSON.stringify({
      //       'title': "파워테스트",
      //       'description': "실화냐.."
      //     })
      //   }
      // })

      let res = await window.Kakao.API.request({
        url: '/v2/api/talk/memo/default/send',
        data: {
          'template_object': {
            'object_type': 'text',
            'text': `근무시간: 주 5일(상의 후결정)
시급: 6000원,
추가내용: 최저도 안주네 ㅡㅡ
테스트 한직
오 되네?
            `,
            'link': {
              'web_url': 'https://www.naver.com',
              'mobile_web_url': 'https://www.daum.net'
            }
          }
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
          <div id="working">
            <label htmlFor="working-hour" className="label">
              근무시간
              <input name="working-hour" className="text working-hour" />
            </label>
            <br />

            <label htmlFor="pay" className="label">
              급여
              <input name="pay" className="text pay" />
            </label>
            <br />

            <label type="number" htmlFor="callnumber" className="label">
              연락처
              <input name="callnumber" className="text callnumber" />
            </label>
            <br />

            <label htmlFor="more-details" className="label">
              추가메모
              <input type="text" name="more-details" id="more-details" />
            </label>

          </div>
          <button onClick={this.sendTest}>내게보내기 테스트</button>
          <div>{this.state.test}</div>
        </div>
        )
  }
}
