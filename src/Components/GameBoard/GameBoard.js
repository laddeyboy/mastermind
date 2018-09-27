import React, {Component} from 'react'
import './GameBoard.css'

import PegRow from './PegRow/PegRow'
import ColorPalette from '../ColorPalette/ColorPalette'
import {checkPlayerSequenece} from '../../gameLogic'

// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow, setPlayerName, incrementAttemptCtr,
  setFinalSequence, toggleNewGame, setMarkerColor, toggleMarkerTile,
  showEndScreen} from '../../redux/actions'

function numBlackMarkers (markerArray) {
  return markerArray.reduce(function (markerCount, item) {
    if (item === 'black') {
      return markerCount + 1
    } else {
      return markerCount
    }
  }, 0)
}

class GameBoard extends Component {

  returnPegRowArray(aNum) {
    const pegRowArray = [];
    for(let i = 0; i < aNum; i++){
      pegRowArray.push(<PegRow key={i} rowId={i} checkGuess={() => this.checkGuess(i)}/>)
      // pegRowArray.push(<PegRow key={i} rowId={i} checkGuess={this.props.checkGuess}/>)
    }
    return pegRowArray;
  }

  checkGuess = (rowId) => {
      // defensive: this should never happen
      if (rowId !== this.props.currentAttempt) {
        console.error('Uh-oh! Clicked the wrong row')
        return
      }
      if (this.props.currentAttempt < 9) {
        const solution = this.props.correctSequence
        const playerGuess = this.props.gameboard[rowId]
        const markerArray = checkPlayerSequenece(solution, playerGuess)
        const markerCt = numBlackMarkers(markerArray)
        for (let i = 0; i < markerArray.length; i++) {
          this.props.setMarkerColor(this.props.currentAttempt, i, markerArray[i])
        }
        this.props.toggleMarkerTile(rowId)
        if (markerCt === 4) {
          // end the game if all of the user's pegs are correct
          this.props.showEndScreen('WINNER')
        } else { // increment turn counter
          this.props.incrementAttemptCtr()
        }
      } else {
        this.props.showEndScreen('TRY AGAIN')
      }
  }


  render () {
    const pegRowArray = this.returnPegRowArray(10)
    return (
      <div className="GameBoard-container">
        {pegRowArray}
        <ColorPalette />
      </div>
    )
  }
}

function mapStateToProps (state) {
  // C. Oakman - there is a simpler way to write this using _.pick
  // https://underscorejs.org/#pick
  // return _.pick(state, 'isMainModalOpen', 'newGame', 'activeColor', ...)
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
    toggleMainModal: () => dispatch(toggleMainModalWindow()),
    setPlayerName: (data) => dispatch(setPlayerName()),
    incrementAttemptCtr: () => dispatch(incrementAttemptCtr()),
    setFinalSequence: (data) => dispatch(setFinalSequence(data)),
    toggleNewGame: () => dispatch(toggleNewGame()),
    setMarkerColor: (rowIndex, colIndex, data) => dispatch(setMarkerColor(rowIndex, colIndex, data)),
    toggleMarkerTile: (rowIndex) => dispatch(toggleMarkerTile(rowIndex)),
    showEndScreen: (data) => dispatch(showEndScreen(data))
  }
}

var reduxGameBoard = connect(mapStateToProps, mapDispatchToProps)(GameBoard)

export default reduxGameBoard
