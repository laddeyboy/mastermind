import React, {Component} from 'react'
import './GameBoard.css'
import './Button'

import PegRow from './PegRow/PegRow'
import ColorPalette from './ColorPalette/ColorPalette'

// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow, setPlayerName} from '../redux/actions'

class GameBoard extends Component {
  render () {
    return (
      <div className="GameBoard-container">
        <PegRow />
        <PegRow />
        <PegRow />
        <PegRow />
        <PegRow />
        <PegRow />
        <PegRow />
        <PegRow />
        <PegRow />
        <PegRow />
        <div className="GameBoard-template-header">
          <p>Select Your Color Below</p>
        </div>
        <ColorPalette />
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

var reduxGameBoard = connect(mapDispatchToProps, mapDispatchToProps)(GameBoard)

export default reduxGameBoard
