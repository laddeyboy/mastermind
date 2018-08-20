import React, { Component } from 'react'
// import logo from '../logo.svg'
import './GameScreen.css'
// React Router Dependency
// import {Link} from 'react-router-dom'

// React Sibling Components
import Modal from './Modal'
import GameBoard from './GameBoard/GameBoard'
import EndGameModal from './EndGameModal/EndGameModal'

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
        {this.props.isMainModalOpen && <Modal/>}
        {this.props.showEndScreen && <EndGameModal/>}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isMainModalOpen: state.isMainModalOpen,
    showEndScreen: state.showEndScreen,
    playerName: state.playerName
  }
}

var reduxGameScreen = connect(mapStateToProps)(GameScreen)

export default reduxGameScreen
