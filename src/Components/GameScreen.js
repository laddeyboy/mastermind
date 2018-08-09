import React, { Component } from 'react'
import logo from '../logo.svg'
import './GameScreen.css'
// React Router Dependency
import {Link} from 'react-router-dom'

class GameScreen extends Component {
  render () {
    return (
      <div className="IntroScreen-container">
        <Link to='/'>
          <button className="GameScreen-btn">DEBUG-RESET</button>
        </Link>
        <h1 className="IntroScreen-heading">There will be a modal here!</h1>
      </div>
    )
  }
}

export default GameScreen
