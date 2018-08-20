import React, {Component} from 'react'
// Redux Imports
import {connect} from 'react-redux'

const markerBtnStyle = {
  height: '15px',
  width: '15px',
  border: '1px solid black',
  borderRadius: '50%',
  backgroundColor: 'gray',
  margin: '2px'
}

function deepCopy (x) {
  return JSON.parse(JSON.stringify(x))
}

class MarkerButton extends Component {
  render () {
    let btnStyle = deepCopy(markerBtnStyle)
    // let row = this.props.rowInd
    // let col = this.props.colInd
    // btnStyle.backgroundColor = this.props.markerBackgrounds[row][col]
    btnStyle.backgroundColor = this.props.color
    return (
      <div style={btnStyle}></div>
    )
  }
}

function mapStateToProps (state) {
  return {
    markerBackgrounds: state.markerBackgrounds
  }
}

var reduxMarkerButton = connect(mapStateToProps)(MarkerButton)

export default reduxMarkerButton
