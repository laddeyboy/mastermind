import React, {Component} from 'react'
import './GameBoard.css'

import PegRow from '../PegRow/PegRow'
import ColorPalette from '../ColorPalette/ColorPalette'
import {setSolutionSequence, checkPlayerSequenece} from '../../gameLogic'

// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow, setPlayerName, incrementAttemptCtr,
  setFinalSequence, toggleNewGame} from '../../redux/actions'

class GameBoard extends Component {
  render () {
    if (this.props.newGame) {
      this.props.setFinalSequence(setSolutionSequence())
      this.props.toggleNewGame()
    }
    const checkGuess = (rowId) => {
      if (this.props.currentAttempt < 10) {
        if (checkPlayerSequenece(this.props.correctSequence, this.props.gameboard[rowId])) {
          console.log('WINNER')
        } else {
          console.log('KEEP TRYING')
        }
        this.props.incrementAttemptCtr()
      } else {
        console.log('GAME OVER')
      }
    }
    // console.log('[GameBoard.js] is gameboard', this.props.gameboard)
    return (
      <div className="GameBoard-container">
        <PegRow rowId={0} checkGuess={() => checkGuess(0)}/>
        <PegRow rowId={1} checkGuess={() => checkGuess(1)}/>
        <PegRow rowId={2} checkGuess={() => checkGuess(2)}/>
        <PegRow rowId={3} checkGuess={() => checkGuess(3)}/>
        <PegRow rowId={4} checkGuess={() => checkGuess(4)}/>
        <PegRow rowId={5} checkGuess={() => checkGuess(5)}/>
        <PegRow rowId={6} checkGuess={() => checkGuess(6)}/>
        <PegRow rowId={7} checkGuess={() => checkGuess(7)}/>
        <PegRow rowId={8} checkGuess={() => checkGuess(8)}/>
        <PegRow rowId={9} checkGuess={() => checkGuess(9)}/>
        <ColorPalette />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isMainModalOpen: state.isMainModalOpen,
    newGame: state.newGame,
    activeColor: state.activeColor,
    currentAttempt: state.currentAttempt,
    correctSequence: state.correctSequence,
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
    },
    incrementAttemptCtr: () => {
      dispatch(incrementAttemptCtr())
    },
    setFinalSequence: (data) => {
      dispatch(setFinalSequence(data))
    },
    toggleNewGame: () => {
      dispatch(toggleNewGame())
    }
  }
}

var reduxGameBoard = connect(mapStateToProps, mapDispatchToProps)(GameBoard)

export default reduxGameBoard
