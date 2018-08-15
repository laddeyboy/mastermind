import React from 'react'

const markerBtnStyle = {
  height: '20px',
  width: '20px',
  border: '1px solid black',
  borderRadius: '50%',
  backgroundColor: 'gray'
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
    <div style={btnStyle}
      onClick={() => {
        console.log('You CLICKED me')
      }}></div>
  )
}

export default markerButton
