import React from 'react'

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

const markerButton = (props) => {
  // pegBtnStyle.backgroundColor = props.color
  let btnStyle = deepCopy(markerBtnStyle)
  if (props.color) {
    btnStyle.backgroundColor = props.color
  }
  return (
    <div style={btnStyle}></div>
  )
}

export default markerButton
