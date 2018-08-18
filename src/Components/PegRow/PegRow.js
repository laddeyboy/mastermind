import React, {Component} from 'react'
import './PegRow.css'
import PegButton from '../PegButton/PegButton'
import MarkerButton from '../MarkerButton/MarkerButton'

// Redux Imports
import {connect} from 'react-redux'
import {setPegColor} from '../../redux/actions'

class PegRow extends Component {
  // this comes in with a local prop of rowIndex
  render () {
    const setBtnBackgroundColor = (btnId) => {
      // I want to set my gameboard with the activeColor at the rowIndex, colIndex
      if (this.props.rowId === this.props.currentAttempt) {
        this.props.setPegColor(this.props.rowId, btnId, this.props.activeColor)
      } else {
        console.log('[PegRow.js] your playing on the wrong turn')
      }
    }

    return (
      <div className="PegRow-container">
        <div className="PegRow-btns">
          <PegButton clickFn={() => setBtnBackgroundColor(0)} rowInd={this.props.rowId} colInd={0}/>
          <PegButton clickFn={() => setBtnBackgroundColor(1)} rowInd={this.props.rowId} colInd={1}/>
          <PegButton clickFn={() => setBtnBackgroundColor(2)} rowInd={this.props.rowId} colInd={2}/>
          <PegButton clickFn={() => setBtnBackgroundColor(3)} rowInd={this.props.rowId} colInd={3}/>
        </div>
        <div className="PegRow-markers" onClick={this.props.checkGuess}>
          <MarkerButton color='gray'/>
          <MarkerButton />
          <MarkerButton color='black'/>
          <MarkerButton color='white'/>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeColor: state.activeColor,
    currentAttempt: state.currentAttempt,
    gameboard: state.gameboard
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
