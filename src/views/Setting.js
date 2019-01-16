import React, { Component } from 'react';
import { LogOutButton, BackButton } from './component';
import { Redirect } from 'react-router-dom';

import './css/Settings.css';

export default class Setting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: true
        }
    }
    goBack = () => {
        this.props.history.goBack();
    }

    kakaoLogOut = () => {
        window.Kakao.Auth.logout();
        this.setState({isLogin: false});
    }

    render() {
        if(!this.state.isLogin) return <Redirect to="/login" />

        return (
        <div className="settings">
            <header className="settings-header">
                <BackButton className="back-button" size={25} color="rgb(53,64,69)" onClick={this.goBack}/>
                <span className="settings-header-title">설정</span>
            </header>
            <div className="settings-list">
                <div className="settings-list-item">
                    <span className="settings-list-item-title">오픈소스 라이센스</span>
                </div>
            </div>
            <footer className="settings-footer">
                <LogOutButton 
                    className="logout-button" 
                    size={25} 
                    color="rgb(53,64,69" 
                    onClick={this.kakaoLogOut}
                />
            </footer>
        </div>
        )
    }
}