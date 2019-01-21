import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import '../css/Loading.css';

export default class Loading extends Component {

    render() {
        if(this.props.isAuthed === undefined) {
            return (
                <div className="loading">
                    로딩중이에오...
                </div>
            )
        } else {
            if(!this.props.isAuthed) return <Redirect to="/login" />
            else return <Redirect to="/send" />
        }   
    }
}
