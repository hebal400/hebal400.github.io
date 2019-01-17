import React, { Component } from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import { IoIosClipboard, IoIosCalculator } from 'react-icons/io';
// import 'https://fonts.googleapis.com/css?family=Jua';
import './css/Main.css';
import Profile from './Profile';
import Send from './Send';
import Calculator from './Calculator';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }

  }

  render() {
    let { match } = this.props;
    if(!this.state.isLogin) return <Redirect to="/login" />
    return (
        <div>
          <Profile kakaoLogOut={this.kakaoLogOut} />
          <ul className="main-tabs">
            <li className="main-tabs-item">
              <NavLink to={`${match.path}`}>
                <IoIosClipboard className="main-tabs-icon" size={25} color="#344955"/>
                <span>보내기</span>
              </NavLink>
            </li>
            <li className="main-tabs-item">
              <NavLink to={`${match.path}/test`}>
                <IoIosCalculator className="main-tabs-icon" size={25} color="#344955"/>
                <span>테스트</span>
              </NavLink>
            </li>
          </ul>

          <div id="wrap">
            <label for="working-hour" className="label">근무시간</label>
            <input name="working-hour" className="text working-hour" />
            <br />

            <label for="pay" className="label">급여</label>
            <input name="pay" className="text pay" />
            <br />

            <label type="number" for="callnumber" className="label">연락처</label>
            <input name="callnumber" className="text callnumber" />
            <br />

            <label for="more-details" className="label">추가메모</label>
            <input type="text" name="more-details" id="more-details" />

          </div>

          <Route exact path={`${match.path}`} component={Send} />
          <Route path={`${match.path}/test`} component={Calculator} />

        </div>
    )
  }
}
