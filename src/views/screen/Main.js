import React, { Component } from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import { IoIosClipboard, IoIosCalculator } from 'react-icons/io';
// import 'https://fonts.googleapis.com/css?family=Jua';
import '../css/Main.css';
import Profile from '../component/Profile';
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

          <Route exact path={`${match.path}`} component={Send} />
          <Route path={`${match.path}/test`} component={Calculator} />

        </div>
    )
  }
}
