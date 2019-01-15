import React, { Component } from 'react'
import { IoIosLogOut } from 'react-icons/io';

export default class Logout extends Component {
    render() {
        return (
            <IoIosLogOut 
                size={this.props.size}
                className={this.props.className}
                onClick={this.props.onClick}
            />
        )
    }
}
