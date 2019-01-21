import React, { Component } from 'react'
import { IoIosClose } from 'react-icons/io'

export default class Exit extends Component {
  render() {
    return (
      <IoIosClose 
        {...this.props}
      />
    )
  }
}
