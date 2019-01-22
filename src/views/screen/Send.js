import React, { Component } from 'react'
import { getParsedData } from '../../actions';
import "../css/Send.css"

import MeAppIcon from '../../images/me_appicon_kr.png';
import LinkIcon from '../../images/kakaolink_btn_small_ov.png';

export default class Send extends Component {

  constructor(props) {
    super(props);

    this.state = {
      siteTitle: '',
      workingHour: 0,
      payType: "시급",
      pay: 0,
      workingAddress: '',
      addMemo: '',
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
          workingAddress: data.parsedData.workingAddress
        })
      }

    });
  }

  changesiteTitle = event => {
    this.setState({
      siteTitle:
      event.currentTarget.value
    })
  }

  changeworkingHour = event => {
    this.setState({
      workingHour:
      event.currentTarget.value
    })
  }

  changepayType = event => {
    this.setState({
      payType:
      event.currentTarget.value
    })
  }

  changepay = event => {
    this.setState({
      pay:
      event.currentTarget.value
    })
  }

  changeworkingAddress = event => {
    this.setState({
      workingAddress:
      event.currentTarget.value
    })
  }

  changeaddMemo = event => {
    this.setState({
      addMemo:
      event.currentTarget.value
    })
  }

  sendTest = async () => {
    try {

      let res = await
     window.Kakao.API.request({
        url: '/v2/api/talk/memo/default/send',
        data: {
          'template_object': {
            'object_type': 'text',
            'text': `제목: ${this.state.siteTitle}${'\n\n'}근무시간: ${this.state.workingHour}${'\n\n'}급여: ${this.state.payType} ${this.state.pay}${'\n\n'}주소: ${this.state.workingAddress}${'\n\n'}추가메모: ${this.state.addMemo}`,
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

  sendToMeButton = () => (
    <button onClick={this.sendTest} className="kakao-link-btn">
      <img src={MeAppIcon} alt="내게 보내기"/>
      <span>내게 보내기</span>
    </button>
  )

  sendLinkButton = () => (
    <button className="kakao-link-btn" onClick={this.sendLink}>
      <img src={LinkIcon} alt="친구에게 공유하기" />
      <span>친구에게 공유하기</span>
    </button>
  )

  sendLink = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'text',
      text: `제목: ${this.state.siteTitle}${'\n\n'}근무시간: ${this.state.workingHour}${'\n\n'}급여: ${this.state.payType} ${this.state.pay}${'\n\n'}주소: ${this.state.workingAddress}${'\n\n'}추가메모: ${this.state.addMemo}`,
      link: {
        'webUrl': 'https://www.naver.com',
        'mobileWebUrl': 'https://www.daum.net'
      }
    })
  }
  render() {
        return (
        <div class="working-container">
          <div id="working">
            <label htmlFor="siteTitle" className="label">
              <span className="labelTitle">
              제목
              </span>
              <div className="txtWrap">
                <div className="input-text">
                  <input name="siteTitle" className="working-text siteTitle" value = {this.state.siteTitle} onChange={this.changesiteTitle}/>
                </div>
              </div>
            </label>

            <label htmlFor="working-hour" className="label">
              <span className="labelTitle">
              근무시간
              </span>
              <div className="txtWrap">
                <div className="input-text">
                  <input name="working-hour" className="working-text working-hour" value = {this.state.workingHour} onChange={this.changeworkingHour} />
                </div>
                <span className="working-detail time hour">시간</span>
              </div>
            </label>

            <label htmlFor="pay" className="label">
              <span className="labelTitle paylabel">
                <select value={this.state.payType} className="pay-select">
                  <option value="시급">시급</option>
                  <option value="일급">일급</option>
                  <option value="주급">주급</option>
                  <option value="월급">월급</option>
                  <option value="연봉">연봉</option>
                </select>
              </span>
              <div className="txtWrap">
                <div className="input-text">
                  <input name="pay" className="working-text pay" value = {this.state.pay} onChange={this.changepay} />
                </div>
                <span className="working-detail won">원</span>
              </div>
            </label>

            <label htmlFor="workingAddress" className="label">
              <span className="labelTitle">
              주소
              </span>
              <div className="txtWrap">
                <div className="input-text">
                  <input name="workingAddress" className="working-text workingAddress" value = {this.state.workingAddress} onChange={this.changeworkingAddress} />
                </div>
              </div>
            </label>


            <label htmlFor="more-details" className="label detail-container">
              <span className="labelTitle">
              추가메모
              </span>
              <br />
              <div className="textarea">
                <textarea type="text" id="more-details" className="more-details" placeholder="추가 메모는 70자까지 입력가능합니다." onChange={this.changeaddMemo} />
              </div>
            </label>

          </div>
          <footer className="send-footer">
            {this.sendToMeButton()}
            {this.sendLinkButton()}
            <div>{this.state.test}</div>
          </footer>
        </div>
        )
  }
}
