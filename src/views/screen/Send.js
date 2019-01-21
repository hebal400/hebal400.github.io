import React, { Component } from 'react'
import { getParsedData } from '../../actions';
import "../css/Send.css"

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

      let res = await
     window.Kakao.API.request({
        url: '/v2/api/talk/memo/default/send',
        data: {
          'template_object': {
            'object_type': 'text',
            'text': `근무시간:시간`,
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
              <span className="labelTitle">
              근무시간
              </span>
              <div className="txtWrap">
                <input name="working-hour" className="text working-hour" />
                <span className="time hour">시간</span>
                <input name="working-hour" className="text working-hour" />
                <span className="time minute">분</span>
              </div>
            </label>

            <label htmlFor="pay" className="label">
              <span className="labelTitle">
              급여
              </span>
              <div className="txtWrap">
                <input name="pay" className="text pay" />
                <span className="won">원</span>
              </div>
            </label>

            <label type="number" htmlFor="callnumber" className="label">
              <span className="labelTitle">
              연락처
              </span>
              <div className="txtWrap">
                <input name="callnumber" className="text callnumber" />
              </div>
            </label>

            <label htmlFor="more-details" className="label">
              <span className="labelTitle">
              추가메모
              </span>
              <br />
              <div className="textarea">
                <textarea type="text" name="more-details" rows="20" id="more-details" />
              </div>
            </label>

          </div>
          <button onClick={this.sendTest}>내게보내기 테스트</button>
          <div>{this.state.test}</div>
        </div>
        )
  }
}
