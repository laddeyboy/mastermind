import React, {Component} from 'react'
import './PegRow.css'
import PegButton from '../PegButton/PegButton'
import MarkerBox from '../MarkerBox/MarkerBox'

// Redux Imports
import {connect} from 'react-redux'

class PegRow extends Component {
  render () {
    const setBtnBackgroundColor = () => {
      console.log('my color should be: ', this.props.activeColor)
    }
    return (

      <div className="PegRow-container">
        <div className="PegRow-btn-container">
          <PegButton clickFn={setBtnBackgroundColor}/>
          <PegButton clickFn={setBtnBackgroundColor}/>
          <PegButton clickFn={setBtnBackgroundColor}/>
          <PegButton clickFn={setBtnBackgroundColor}/>
        </div>
        <div className="PegRow-markers-container">
          <MarkerBox />
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
