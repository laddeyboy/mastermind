import React, { Component } from 'react'
import logo from '../../logo.svg'
import './IntroScreen.css'
// React Router Dependency
import {Link} from 'react-router-dom'

class IntroScreen extends Component {
  render () {
    return (
      <div className="IntroScreen-container">
        <img src={logo} className="IntroScreen-logo" alt="logo" />
        <h1 className="IntroScreen-heading">MASTERMIND</h1>
        <Link to='/game'>
          <button className="IntroScreen-btn"> Can you figure it out?</button>
        </Link>
      </div>
    )
  }
}

export default IntroScreen
