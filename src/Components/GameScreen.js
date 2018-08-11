import React, { Component } from 'react'
// import logo from '../logo.svg'
import './GameScreen.css'
// React Router Dependency
import {Link} from 'react-router-dom'

// React Sibling Components
import Modal from './Modal'

// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow} from '../redux/actions'

class GameScreen extends Component {
  render () {
    console.log('[GameScreen.js] what is toggle? ', this.props.isMainModalOpen)
    return (
      <div className="GameScreen-container">
        <div className="GameScreen-board">
          <h1>HELLO TESTER</h1>
          <Link to='/'>
            <button className="GameScreen-btn"
              onClick={() => this.props.toggleMainModal()}>DEBUG-RESET</button>
          </Link>
          {this.props.isMainModalOpen && <Modal/>}
        </div>
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
