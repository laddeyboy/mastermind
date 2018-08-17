import React, {Component} from 'react'
import './PegRow.css'
import PegButton from '../PegButton/PegButton'
import MarkerButton from '../MarkerButton/MarkerButton'

// Redux Imports
import {connect} from 'react-redux'

class PegRow extends Component {
  render () {
    const setBtnBackgroundColor = () => {
      console.log('my color should be: ', this.props.activeColor)
    }
    return (

      <div className="PegRow-container">
        <div className="PegRow-btns">
          <PegButton clickFn={setBtnBackgroundColor}/>
          <PegButton clickFn={setBtnBackgroundColor}/>
          <PegButton clickFn={setBtnBackgroundColor}/>
          <PegButton clickFn={setBtnBackgroundColor}/>
        </div>
        <div className="PegRow-markers">
          <MarkerButton />
          <MarkerButton />
          <MarkerButton />
          <MarkerButton />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeColor: state.activeColor
  }
}

var reduxPegRow = connect(mapStateToProps)(PegRow)

export default reduxPegRow
