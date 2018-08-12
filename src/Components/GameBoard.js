import React, {Component} from 'react'
import './GameBoard.css'
import './Button'

import PegRow from './PegRow'

// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow, setPlayerName} from '../redux/actions'

class GameBoard extends Component {
  render () {
    return (
      <div className="GameBoard-container">
        <div className="GameBoard-heading">
          {console.log('[GameBoard.js] Player name is: ', this.props.playerName)}
          Welcome {this.props.playerName}
        </div>
        <div className="GameBoard-playarea">
          <PegRow />
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
      dispatch(setPlayerName())
    }
  }
}

var reduxGameBoard = connect(mapDispatchToProps, mapDispatchToProps)(GameBoard)

export default reduxGameBoard
