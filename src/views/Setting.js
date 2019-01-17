import React, { Component } from 'react';
import { LogOutButton, BackButton } from './component';
import { Redirect } from 'react-router-dom';

import './css/Settings.css';

export default class Setting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: props.location.state.isLogin,
            redirect: false
        }
    }
    goBack = () => {
        this.props.history.goBack();
    }

    kakaoLogOut = () => {
        if(this.state.isLogin) {
            window.Kakao.Auth.logout();
            this.setState({isLogin: false, redirect: true});
        }
    }

    _renderLoginButton = () => ((this.state.isLogin) ? (
        <span className="logout-button" >
            <LogOutButton 
                size={25} 
                color="rgb(53,64,69" 
                onClick={this.kakaoLogOut}
            />
        </span>
    ) : null)

    render() {
        
        console.log(this.state.isLogin)
        if(this.state.redirect) return <Redirect to="/login" />

        return (
        <div className="settings">
            <header className="settings-header">
                <BackButton className="back-button" size={25} color="rgb(53,64,69)" onClick={this.goBack}/>
                <span className="settings-header-title">설정</span>
            </header>
            <div className="settings-list">
                <div className="settings-list-item">
                    <span className="settings-list-item-title">개발자 소개</span>
                </div>
            </div>
            <footer className="settings-footer">
                { this._renderLoginButton() } 
            </footer>
        </div>
        )
    }
}