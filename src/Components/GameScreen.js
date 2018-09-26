import React, { Component } from 'react'
// import logo from '../logo.svg'
import './GameScreen.css'
// React Router Dependency
// import {Link} from 'react-router-dom'
import {checkPlayerSequenece} from '../gameLogic'

// React Sibling Components
import Modal from './Modal/Modal'
import GameBoard from './GameBoard/GameBoard'
import EndGameModal from './EndGameModal/EndGameModal'

// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow, setPlayerName, incrementAttemptCtr,
  setFinalSequence, toggleNewGame, setMarkerColor, toggleMarkerTile,
  showEndScreen} from '../redux/actions'


//TODO: move this to GameLogic.js????
function numBlackMarkers (markerArray) {
  return markerArray.reduce(function (markerCount, item) {
    if (item === 'black') {
      return markerCount + 1
    } else {
      return markerCount
    }
  }, 0)
}

class GameScreen extends Component {
  checkGuess = (rowId) => {
    //setup function variables for readability....
    const solution = this.props.correctSequence
    const playerGuess = this.props.gameboard[rowId]
    const markerArray = checkPlayerSequenece(solution, playerGuess)
    const markerCt = numBlackMarkers(markerArray)

    // defensive check: this case is if player clicks on the wrong row play button
    if (rowId !== this.props.currentAttempt) {
      console.error('Uh-oh! Clicked the wrong row')
      //do something more meaningful later...modal or something, popup message, etc.
      return
    }
    //TODO: change 9 from a magic number to something meaningful
    if (this.props.currentAttempt < 9) {
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
    return (
      <div className="GameScreen-container">
        <div className="GameScreen-heading">
          Welcome {this.props.playerName}
        </div>
        <GameBoard checkGuess={this.checkGuess}/>
        {this.props.isMainModalOpen && <Modal/>}
        {this.props.showEndScreen && <EndGameModal/>}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isMainModalOpen: state.isMainModalOpen,
    showEndScreen: state.showEndScreen,
    playerName: state.playerName,
    newGame: state.newGame,
    activeColor: state.activeColor,
    currentAttempt: state.currentAttempt,
    correctSequence: state.correctSequence,
    gameboard: state.gameboard,
    markerTiles: state.markerTiles
  }
}
function mapDispatchToProps (dispatch) {
  console.log('[GameScreen.js] how often am I calling this and when?')
  return {
    toggleMainModal: () => dispatch(toggleMainModalWindow()),
    setPlayerName: (data) => dispatch(setPlayerName()),
    incrementAttemptCtr: () => dispatch(incrementAttemptCtr()),
    setFinalSequence: (data) => dispatch(setFinalSequence(data)),
    toggleNewGame: () => dispatch(toggleNewGame()),
    setMarkerColor: (rowIndex, colIndex, data) => dispatch(setMarkerColor(rowIndex, colIndex, data)),
    toggleMarkerTile: (rowIndex) => dispatch(toggleMarkerTile(rowIndex)),
  }
}
// var reduxGameScreen = connect(mapStateToProps)(GameScreen)
var reduxGameScreen = connect(mapStateToProps, mapDispatchToProps)(GameScreen)

export default reduxGameScreen
