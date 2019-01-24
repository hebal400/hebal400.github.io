import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import '../css/Loading.css';

export default class Loading extends Component {

    render() {
        if(this.props.isAuthed === undefined) {
            return (
              <div className="sk-circle">
                <div className="sk-circle1 sk-child"></div>
                <div className="sk-circle2 sk-child"></div>
                <div className="sk-circle3 sk-child"></div>
                <div className="sk-circle4 sk-child"></div>
                <div className="sk-circle5 sk-child"></div>
                <div className="sk-circle6 sk-child"></div>
                <div className="sk-circle7 sk-child"></div>
                <div className="sk-circle8 sk-child"></div>
                <div className="sk-circle9 sk-child"></div>
                <div className="sk-circle10 sk-child"></div>
                <div className="sk-circle11 sk-child"></div>
                <div className="sk-circle12 sk-child"></div>
              </div>
            )
        } else {
            if(!this.props.isAuthed) return <Redirect to="/login" />
            else return <Redirect to="/send" />
        }
    }
}
