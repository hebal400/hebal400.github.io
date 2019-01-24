import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import '../css/Loading.css';

export default class Loading extends Component {

    render() {
        if(this.props.isAuthed === undefined) {
            return (
              <div class="sk-circle">
                <div class="sk-circle1 sk-child"></div>
                <div class="sk-circle2 sk-child"></div>
                <div class="sk-circle3 sk-child"></div>
                <div class="sk-circle4 sk-child"></div>
                <div class="sk-circle5 sk-child"></div>
                <div class="sk-circle6 sk-child"></div>
                <div class="sk-circle7 sk-child"></div>
                <div class="sk-circle8 sk-child"></div>
                <div class="sk-circle9 sk-child"></div>
                <div class="sk-circle10 sk-child"></div>
                <div class="sk-circle11 sk-child"></div>
                <div class="sk-circle12 sk-child"></div>
              </div>
            )
        } else {
            if(!this.props.isAuthed) return <Redirect to="/login" />
            else return <Redirect to="/send" />
        }
    }
}
