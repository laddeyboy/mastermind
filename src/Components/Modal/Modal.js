import React, {Component} from 'react'
import './Modal.css'


// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow, setPlayerName} from '../../redux/actions'


class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ''
    }
  }
  onBtnClick (e) {
    if(e.target.value === 'single'){
      console.log("YOU WANT SINGLE PLAYER")
    } else {
      console.log("YOU WANT MULTIPLAYER")
    }
    this.props.toggleMainModal()
  }

  setNameHandler = (event) => {
    this.props.setPlayerName(event.target.value)
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
              value={this.props.playerName}
              placeholder="Enter Player Name"
              onChange={this.setNameHandler}></input>
          </div>
          <div className="Modal-buttons">
            <label htmlFor="btns">Select a game mode:</label><br/>
            <button className="Modal-btn" id="btns" value="single"
              onClick={(e) => this.onBtnClick(e)}>Single Player</button>
            <button className="Modal-btn"
              onClick={() => this.onBtnClick()}>Multiplayer</button>
          </div>

        </div>
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
function mapDispatchToProps (dispatch) {
  return {
    toggleMainModal: () => {
      dispatch(toggleMainModalWindow())
    },
    setPlayerName: (data) => {
      dispatch(setPlayerName(data))
    }
  }
}

var reduxModal = connect(mapStateToProps, mapDispatchToProps)(Modal)

export default reduxModal
