import React, {Component} from 'react'
// Redux Imports
import {connect} from 'react-redux'

const pegStyling = {
  height: '40px',
  width: '40px',
  border: '1px solid black',
  borderRadius: '50%'
}

function deepCopy (x) {
  // console.log('[PegButton.js] what it is', JSON.parse(JSON.stringify(x)))
  return JSON.parse(JSON.stringify(x))
}

const PegButton = (props) => {
  let newPegStyle = deepCopy(pegStyling)
    newPegStyle.backgroundColor = props.color
  return (
    <div style={newPegStyle} onClick={props.clickFn}></div>
  )
}
  // setPegStyling () {
    //STILL NEED A WAY TO CHANGE ACTIVE COLOR PALETTE CSS
  //   if (this.props.color) {
  //     if (this.props.color === this.props.activeColor) {
  //       btnStyle.height = '50px'
  //       btnStyle.width = '50px'
  //       btnStyle.border = '3px solid #00d8ff'
  //     }
  //     btnStyle.backgroundColor = this.props.color
  //   }
  // }
  
function mapStateToProps (state) {
  return {
    activeColor: state.activeColor,
  }
}

var reduxPegButton = connect(mapStateToProps)(PegButton)

export default reduxPegButton
