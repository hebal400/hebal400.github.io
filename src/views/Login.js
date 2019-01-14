/**
 * Login.js
 * Aerain, Jeju National University.
 */

import React, { Component } from 'react'
import Profile from './Profile';
import Settings from './component/Settings'
import './Login.css';

export default class Login extends Component {

    componentDidMount = () => this.createLoginButton();

    createLoginButton = () => {
        let changeAuth = this.props.changeAuth;
        window.Kakao.Auth.createLoginButton({
            container: '.kakao-login-btn',
            success: function(authObj) {
              console.log(JSON.stringify(authObj));
            },
            fail: function(err) {
               alert(JSON.stringify(err));
            }
        });
    }

    render() {
        return (
        <div className="login">
            <Settings
                size={30}
                className="settings-btn"
                onClick={() => alert("test")}
            />
            <div className="image-dummy">&lt;이미지 테스트에오&gt;</div>
            <div className="kakao-login-btn"></div>
        </div>
        )
    }
}
