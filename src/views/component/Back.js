import React, { Component } from 'react'
import { IoIosArrowBack } from 'react-icons/io';

export default class Back extends Component {
  render() {
    return (
      <IoIosArrowBack 
        {...this.props}
      />
    )
  }
}
