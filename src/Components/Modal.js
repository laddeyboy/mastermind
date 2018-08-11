import React, {Component} from 'react'
import './Modal.css'

// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow, setPlayerName} from '../redux/actions'

class Modal extends Component {
  onBtnClick (e) {
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

          <label htmlFor="btns">Select a game mode:</label><br/>
          <button className="Modal-btn" id="btns"
            onClick={() => this.onBtnClick()}>Single Player</button>
          <button className="Modal-btn"
            onClick={() => this.onBtnClick()}>Multiplyer</button>
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
      console.log('[Moda.js] Sending toggelMainModal request....')
      dispatch(toggleMainModalWindow())
    },
    setPlayerName: (data) => {
      console.log('[Modal.js] Sending player name to store...', data)
      dispatch(setPlayerName())
    }
  }
}

var reduxModal = connect(mapDispatchToProps, mapDispatchToProps)(Modal)

export default reduxModal
