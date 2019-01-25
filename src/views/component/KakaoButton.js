import React, { Component } from 'react'
import '../css/KakaoButton.css';

export default class SendMeButton extends Component {
  render() {
    return (
        <button onClick={this.props.onClick} className="kakao-link-btn">
            <img src={this.props.img} alt={this.props.title}/>
            <span>{this.props.title}</span>
        </button>
    )
  }
}
