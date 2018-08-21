import React, {Component} from 'react'

// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow, setPlayerName} from '../../redux/actions'

import PegButton from '../PegButton/PegButton'


class EndGameModal extends Component {
  onBtnClick (e) {
    if(e.target.value === 'single'){
      console.log("YOU WANT SINGLE PLAYER")
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
            <h1>{this.props.finalMsg}</h1>
          </div>
          <div className="Modal-buttons">
            {/* show solution and last playerSequence */}
            <button className="Modal-btn" id="btns" value="single"
              onClick={(e) => this.onBtnClick(e)}>Play Again?</button>
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isMainModalOpen: state.isMainModalOpen,
    playerName: state.playerName.EndGameModal,
    finalMsg: state.finalMsg,
    correctSequence: state.correctSequence
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

var reduxEndGameModal = connect(mapStateToProps, mapDispatchToProps)(EndGameModal)

export default reduxEndGameModal