/**
 * Login.js
 * Aerain, Jeju National University.
 */

import React, { Component } from 'react'
import Settings from '../component/Settings'
import { Redirect, Link } from 'react-router-dom';
import '../css/Login.css';
import Logo from '../../images/logo.jpg';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }

    componentDidMount = () => this.createLoginButton();

    createLoginButton = () => {
        window.Kakao.Auth.createLoginButton({
            container: '.kakao-login-btn',
            success: authObj => {
                this.setState({redirect: true});
            },
            fail: err => {
               console.error(err);
            }
        });
    }

    onLoading = () => (
        <div>로딩중</div>
    )

    render() {
        if(this.state.redirect) return <Redirect to="/home" />
        return (
          <div className="login">
            <Link to={{ pathname: "/settings", state: { isLogin: false }}}>
                <Settings
                    size={30}
                    className="settings-btn"
                />
            </Link>

            <div className="logo" style={{backgroundImage: `url(${Logo})`}}></div>
            <div className="kakao-login-btn">{this.onLoading()}</div>
          </div>
        )
    }
}
