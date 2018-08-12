import React, { Component } from 'react'
// import logo from '../logo.svg'
import './GameScreen.css'
// React Router Dependency
import {Link} from 'react-router-dom'

// React Sibling Components
import Modal from './Modal'
import GameBoard from './GameBoard'
import PegRow from './PegRow'

// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow} from '../redux/actions'

class GameScreen extends Component {
  render () {
    return (
      <div className="GameScreen-container">
        <GameBoard />
        {this.props.isMainModalOpen && <Modal/>}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isMainModalOpen: state.isMainModalOpen
  }
}
function mapDispatchToProps (dispatch) {
  return {
    toggleMainModal: () => {
      dispatch(toggleMainModalWindow())
    }
  }
}

var reduxGameScreen = connect(mapStateToProps, mapDispatchToProps)(GameScreen)

export default reduxGameScreen
