import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'

class IntroScreen extends Component {
  render () {
    return (
      <div className="IntroScreen-container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="IntroScreen-heading">MASTERMIND</h1>
        <button className="IntroScreen-btn"> Can you figure it out?</button>
      </div>
    )
  }
}

export default IntroScreen
