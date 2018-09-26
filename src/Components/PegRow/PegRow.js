import React, {Component} from 'react'
import './PegRow.css'
import PegButton from './PegButton/PegButton'
import MarkerButton from '../MarkerButton/MarkerButton'

// Redux Imports
import {connect} from 'react-redux'
import {setPegColor} from '../../redux/actions'

class PegRow extends Component {
  // this comes in with a local prop of rowIndex
  setBtnBackgroundColor (btnId) {
    // I want to set my gameboard with the activeColor at the rowIndex, colIndex
    if (this.props.rowId === this.props.currentAttempt) {
      // change peg color to white on a second click IF still current active palette color
      let currentBtn = this.props.gameboard[this.props.rowId][btnId]
      if (currentBtn === this.props.activeColor && currentBtn !== 'white') {
        this.props.setPegColor(this.props.rowId, btnId, 'white')
      } else {
        this.props.setPegColor(this.props.rowId, btnId, this.props.activeColor)
      }
    } else {
      console.log('[PegRow.js] your playing on the wrong turn')
    }
  }

  render () {
    return (
      <div className="PegRow-container">
        <div className="PegRow-btns">
          <PegButton clickFn={() => this.setBtnBackgroundColor(0)} 
            color={this.props.gameboard[this.props.rowId][0]}/>
                      <PegButton clickFn={() => this.setBtnBackgroundColor(1)} 
            color={this.props.gameboard[this.props.rowId][1]}/>
                      <PegButton clickFn={() => this.setBtnBackgroundColor(2)} 
            color={this.props.gameboard[this.props.rowId][2]}/>
                      <PegButton clickFn={() => this.setBtnBackgroundColor(3)} 
            color={this.props.gameboard[this.props.rowId][3]}/>
        </div>
        {/* conditionally show this div if it's that attempt disable clicks on any other row */}
        {!this.props.markerTiles[this.props.rowId]
          ? <div className="PegRow-markers" >
            <MarkerButton color={this.props.markerBackgrounds[this.props.rowId][0]}/>
            <MarkerButton color={this.props.markerBackgrounds[this.props.rowId][1]}/>
            <MarkerButton color={this.props.markerBackgrounds[this.props.rowId][2]}/>
            <MarkerButton color={this.props.markerBackgrounds[this.props.rowId][3]}/>
          </div>
          : <div className="PegRow-markers tile">
            <button className="PegRow-verify-btn" onClick={this.props.checkGuess}>Play</button>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeColor: state.activeColor,
    currentAttempt: state.currentAttempt,
    markerBackgrounds: state.markerBackgrounds,
    gameboard: state.gameboard,
    markerTiles: state.markerTiles
  }
}
function mapDispatchToProps (dispatch) {
  return {
    setPegColor: (rowIndex, colIndex, data) => {
      // do I need to pass row and index here?
      dispatch(setPegColor(rowIndex, colIndex, data))
    }
  }
}

var reduxPegRow = connect(mapStateToProps, mapDispatchToProps)(PegRow)

export default reduxPegRow
