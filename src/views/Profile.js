import React, { Component } from 'react';
import './Profile.css';
import Logout from './component/Logout';
import Settings from './component/Settings';

export default class Profile extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      properties: {
        nickname: "none",
        profile_image: "none",
      }
    }
  }
  componentDidMount = () => {
    this._isMounted = true;
    this.getProfile();
  }

  getProfile = async () => {
      let res = await window.Kakao.API.request({
        url: '/v2/user/me'
      })
      let { properties } = res;
      if(this._isMounted) await this.setState({properties})
  }
  
  componentWillUnmount = () => {
    this._isMounted = false;
  }

  render = () => {
    let {nickname, thumbnail_image} = this.state.properties;
    return(
      <header className="profile-header">
        <div className="profile-item">
          <img className="profile-image" src={thumbnail_image !== 'none' ? thumbnail_image : ''} />
          <span className="profile-nickname">{nickname !== 'none' ? nickname : ''}</span>
        </div>
        <div className="header-btn-container">
          <Settings size={25} onClick={() => console.log('test')} />
          <Logout size={25} onClick={this.props.kakaoLogOut} />
        </div>
      </header>
    )
  }
}
