import React, { Component } from 'react';

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
    this.getProfile()
  }

  getProfile = async () => {
      let res = await window.Kakao.API.request({
        url: '/v2/user/me'
      })
      let { properties } = res;
      if(this._isMounted) await this.setState({properties})
      console.log(this.state)
  }
  
  componentWillUnmount = () => {
    this._isMounted = false;
  }
  render = () => {
    let {nickname, thumbnail_image} = this.state.properties;
    return(
      <header>
        <img src={thumbnail_image !== 'none' ? thumbnail_image : ''} />
        <span>{nickname !== 'none' ? nickname : ''}</span>
      </header>
    )
  }
}
