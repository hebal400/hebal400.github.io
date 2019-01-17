import React, { Component } from 'react'

export default class Send extends Component {

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
            <label htmlFor="working-hour" className="label">근무시간</label>
            <input name="working-hour" className="text working-hour" />
            <br />

            <label htmlFor="pay" className="label">급여</label>
            <input name="pay" className="text pay" />
            <br />

            <label type="number" htmlFor="callnumber" className="label">연락처</label>
            <input name="callnumber" className="text callnumber" />
            <br />

            <label htmlFor="more-details" className="label">추가메모</label>
            <input type="text" name="more-details" id="more-details" />

          </div>
          <button onClick={this.sendTest}>내게보내기 테스트</button>
        </div>
        )
  }
}
