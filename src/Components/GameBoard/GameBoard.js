import React, {Component} from 'react'
import './GameBoard.css'

import PegRow from '../PegRow/PegRow'
import ColorPalette from '../ColorPalette/ColorPalette'

// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow, setPlayerName} from '../../redux/actions'

class GameBoard extends Component {
  render () {
    console.log('[GameBoard.js] is selectPaletteColor working', this.props.activeColor)
    console.log('[GameBoard.js] is gameboard', this.props.gameboard)
    return (
      <div className="GameBoard-container">
        <PegRow rowId='0'/>
        <PegRow rowId='1'/>
        <PegRow rowId='2'/>
        <PegRow rowId='3'/>
        <PegRow rowId='4'/>
        <PegRow rowId='5'/>
        <PegRow rowId='6'/>
        <PegRow rowId='7'/>
        <PegRow rowId='8'/>
        <PegRow rowId='9'/>
        <ColorPalette />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isMainModalOpen: state.isMainModalOpen,
    activeColor: state.activeColor,
    gameboard: state.gameboard
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

var reduxGameBoard = connect(mapStateToProps, mapDispatchToProps)(GameBoard)

export default reduxGameBoard
