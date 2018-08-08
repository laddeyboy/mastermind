import React, { Component } from 'react'
import logo from '../logo.svg'

class IntroScreen extends Component {
  render () {
    return (
      <div className="IntroScreen-container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>MASTERMIND</h1>
      </div>
    )
  }
}

export default IntroScreen
