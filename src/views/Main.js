import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
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
              <Link to={`${match.path}`}>보내기</Link>
            </li>
            <li className="main-tabs-item">
              <Link to={`${match.path}/test`}>테스트</Link>
            </li>
          </ul>
          <Route exact path={`${match.path}`} component={Send} />
          <Route path={`${match.path}/test`} component={Calculator} />
        </div>
    )
  }
}

