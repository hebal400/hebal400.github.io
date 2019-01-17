/**
 * Login.js
 * Aerain, Jeju National University.
 */

import React, { Component } from 'react'
import Settings from './component/Settings'
import { Redirect, Link } from 'react-router-dom';
import './css/Login.css';

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
               alert(JSON.stringify(err));
            }
        });
    }

    render() {
        if(this.state.redirect) return <Redirect to="/send" />
        return (
        <div className="login">
            <Link to={{ pathname: "/settings", state: { isLogin: false }}}>
                <Settings
                    size={30}
                    className="settings-btn"
                />
            </Link>
            
            <div className="image-dummy">&lt;이미지 테스트에오&gt;</div>
            <div className="kakao-login-btn"></div>
        </div>
        )
    }
}
