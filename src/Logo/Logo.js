import React, { Component } from 'react'
import logo from "./full-word.svg";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <img src={logo} alt="Logotype"></img>
      </div>
    )
  }
}

export default Logo;