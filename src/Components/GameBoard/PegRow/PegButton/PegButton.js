import React from 'react'
// Redux Imports
import {connect} from 'react-redux'

const pegStyling = {
  height: '40px',
  width: '40px',
  border: '1px solid black',
  borderRadius: '50%'
}

function deepCopy (obj) {
  // console.log('[PegButton.js] what it is', JSON.parse(JSON.stringify(x)))
  return JSON.parse(JSON.stringify(obj))
}

const PegButton = (props) => {
  let newPegStyle = deepCopy(pegStyling)
  newPegStyle.backgroundColor = props.color
  // if(props.color === props.activeColor){
  //   newPegStyle.height = '50px'
  //   newPegStyle.width = '50px'
  //   newPegStyle.border = '3px solid #00d8ff'
  // }
  return (
    <div style={newPegStyle} onClick={props.clickFn}></div>
  )
}
  
function mapStateToProps (state) {
  return {
    activeColor: state.activeColor,
  }
}

var reduxPegButton = connect(mapStateToProps)(PegButton)

export default reduxPegButton
