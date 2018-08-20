import React, {Component} from 'react'
import './GameBoard.css'

import PegRow from '../PegRow/PegRow'
import ColorPalette from '../ColorPalette/ColorPalette'
import {setSolutionSequence, checkPlayerSequenece} from '../../gameLogic'

// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow, setPlayerName, incrementAttemptCtr,
  setFinalSequence, toggleNewGame, setMarkerColor, toggleMarkerTile,
  showEndScreen} from '../../redux/actions'

function playerWins (markerArray) {
  return markerArray.reduce(function (markerCount, item) {
    if (item === 'black') {
      return markerCount + 1
    }
  }, 0)
}

class GameBoard extends Component {
  render () {
    if (this.props.newGame) {
      this.props.setFinalSequence(setSolutionSequence())
      this.props.toggleNewGame()
    }

    const checkGuess = (rowId) => {
      if (rowId === this.props.currentAttempt) {
        if (this.props.currentAttempt < 9) {
          let solution = this.props.correctSequence
          let playerGuess = this.props.gameboard[rowId]
          let markerArray = checkPlayerSequenece(solution, playerGuess)
          let markerCt = playerWins(markerArray)
          for (let i = 0; i < markerArray.length; i++) {
            this.props.setMarkerColor(this.props.currentAttempt, i, markerArray[i])
          }
          this.props.toggleMarkerTile(rowId)
          if (markerCt === 4) {
          // all pegs are correct End the Game
          // SHOW SET WINNER MODAL FLAG and RENDER IT
            this.props.showEndScreen('WINNER')
          } else { // increment turn counter
            this.props.incrementAttemptCtr()
          }
        } else {
          this.props.showEndScreen('TRY AGAIN')
        }
      } else {
        console.log('CLICKED WRONG ROW')
      }
    }
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
    gameboard: state.gameboard,
    markerTiles: state.markerTiles
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
    },
    setMarkerColor: (rowIndex, colIndex, data) => {
      dispatch(setMarkerColor(rowIndex, colIndex, data))
    },
    toggleMarkerTile: (rowIndex) => {
      dispatch(toggleMarkerTile(rowIndex))
    },
    showEndScreen: (data) => {
      dispatch(showEndScreen(data))
    }
  }
}

var reduxGameBoard = connect(mapStateToProps, mapDispatchToProps)(GameBoard)

export default reduxGameBoard
