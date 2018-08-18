import React, { Component } from 'react'
// import logo from '../logo.svg'
import './GameScreen.css'
// React Router Dependency
// import {Link} from 'react-router-dom'

// React Sibling Components
import Modal from './Modal'
import GameBoard from './GameBoard/GameBoard'

// Redux Imports
import {connect} from 'react-redux'

class GameScreen extends Component {
  render () {
    return (
      <div className="GameScreen-container">
        <div className="GameScreen-heading">
          Welcome {this.props.playerName}
        </div>
        <GameBoard />
        {/* Activate modal later
        {this.props.isMainModalOpen && <Modal/>} */}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isMainModalOpen: state.isMainModalOpen,
    playerName: state.playerName
  }
}

var reduxGameScreen = connect(mapStateToProps)(GameScreen)

export default reduxGameScreen
