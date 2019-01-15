import React, { Component } from 'react';
import { IoIosSettings } from 'react-icons/io';

export default class Settings extends Component {
    render() {
        return (
            <IoIosSettings 
                {...this.props}
            />
        )
    }
}
