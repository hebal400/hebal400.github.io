import React, { Component } from 'react';
import './css/Profile.css';
import { SettingsButton } from './component';
import { Link } from 'react-router-dom';

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
          <img className="profile-image" src={thumbnail_image !== 'none' ? thumbnail_image : ''} alt="프로필 사진" />
          <span className="profile-nickname">{nickname !== 'none' ? nickname : ''}</span>
        </div>
        <Link to="/settings"><SettingsButton className="settings-btn" size={25} color="#353645"/></Link>
      </header>
    )
  }
}
