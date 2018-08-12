import React, {Component} from 'react'
import './Modal.css'
import './Button'

// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow, setPlayerName} from '../redux/actions'
import { SoloGameModeButtons, MultiGameModeButtons } from './Button';

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ''
    }
  }
  onBtnClick (e) {
    if(e.target.value == 'single'){
      console.log("YOU WANT SINGLE PLAYER")
    } else {
      console.log("YOU WANT MULTIPLAYER")
    }
    this.props.toggleMainModal()
  }

  render () {
    return (
      <div className="Modal-background">
        <div className="Modal-window">
          <div className="Modal-heading">
            Mastermind
          </div>
          <div>
            <input className="Modal-name-input"
              type="text"
              value=""
              placeholder="Enter Player Name"
              onChange={e => this.props.setPlayerName(e.target.value)}></input>
          </div>
          <div className="Modal-buttons">
            <label htmlFor="btns">Select a game mode:</label><br/>
            <button className="Modal-btn" id="btns" value="single"
              onClick={(e) => this.onBtnClick(e)}>Single Player</button>
            <button className="Modal-btn"
              onClick={() => this.onBtnClick()}>Multiplayer</button>
          </div>
          {/* <SoloGameModeButtons />
          <MultiGameModeButtons /> */}
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
    },
    setPlayerName: (data) => {
      dispatch(setPlayerName())
    }
  }
}

var reduxModal = connect(mapDispatchToProps, mapDispatchToProps)(Modal)

export default reduxModal
