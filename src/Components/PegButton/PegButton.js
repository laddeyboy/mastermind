import React from 'react'

const pegBtnStyle = {
  height: '40px',
  width: '40px',
  border: '1px solid black',
  borderRadius: '50%',
  backgroundColor: 'white'
}

function deepCopy (x) {
  return JSON.parse(JSON.stringify(x))
}

const pegButton = (props) => {
  // pegBtnStyle.backgroundColor = props.color
  let btnStyle = deepCopy(pegBtnStyle)
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

export default pegButton
