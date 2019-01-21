import React, { Component } from 'react'
import { getParsedData } from '../../actions';
import "../css/Send.css"

export default class Send extends Component {

  constructor(props) {
    super(props);

    this.state = {
      siteTitle: null,
      workingHour: 0,
      payType: "시급",
      pay: 0,
      workingAddress: null,
      addMemo: null,
    }
  }

  componentDidMount = () => {
    // 테스트용
    getParsedData((data) => {
      console.log(data);
      if(data.result) {
        this.setState({
          siteTitle: data.parsedData.title,
          workingHour: data.parsedData.workingTime,
          payType: data.parsedData.payType,
          pay: data.parsedData.pay,
          workingAddress: data.parsedData.workingAddress,
          addMemo: null,
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
            'text': `제목: ${this.state.siteTitle}${'\n\n'}근무시간: ${this.state.workingHour}${'\n\n'}급여: ${this.state.pay}${'\n\n'}주소: ${this.state.workingAddress}${'\n\n'}추가메모: ${this.state.addMemo}`,
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
            <label htmlFor="siteTitle" className="label">
              <span className="labelTitle">
              제목
              </span>
              <div className="txtWrap">
                <div className="input-text">
                  <input name="siteTitle" className="working-text siteTitle" value = {this.state.siteTitle}/>
                </div>
              </div>
            </label>

            <label htmlFor="working-hour" className="label">
              <span className="labelTitle">
              근무시간
              </span>
              <div className="txtWrap">
                <div className="input-text">
                  <input name="working-hour" className="working-text working-hour"
                  value = {this.state.workingHour} />
                </div>
                <span className="time hour">시간</span>
              </div>
            </label>

            <label htmlFor="pay" className="label">
              <span className="labelTitle">
                <select value={this.state.payType}>
                  <option value="시급">시급</option>
                  <option value="일급">일급</option>
                  <option value="주급">주급</option>
                  <option value="월급">월급</option>
                  <option value="연봉">연봉</option>
                </select>
              </span>
              <div className="txtWrap">
                <div className="input-text">
                  <input name="pay" className="working-text pay" value = {this.state.pay} />
                </div>
                <span className="won">원</span>
              </div>
            </label>

            <label htmlFor="workingAddress" className="label">
              <span className="labelTitle">
              주소
              </span>
              <div className="txtWrap">
                <div className="input-text">
                  <input name="workingAddress" className="working-text workingAddress" value = {this.state.workingAddress} />
                </div>
              </div>
            </label>

            <span className="labelTitle">
              추가메모
              </span>
            <label htmlFor="more-details" className="label">
              <br />
              <div className="textarea">
                <textarea type="text" id="more-details" rows="20" id="more-details" />
              </div>
            </label>

          </div>
          <button onClick={this.sendTest}>내게보내기 테스트</button>
          <div>{this.state.test}</div>
        </div>
        )
  }
}
