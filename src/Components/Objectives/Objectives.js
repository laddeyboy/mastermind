import React from 'react'

const modalStyle = {
  height: '600px',
  width: '500px',
  backgroundColor: 'black',
  color: 'white',
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: '-300px',
  marginLeft: '-150px',
  zIndex: '9999',
  borderRadius: '3px',
  boxShadow: '5px 10px 18px #888888',
  padding: '2%'
}

const finalWarning = {
  color: '#00d8ff'
}
const instructions = {
  textAlign: 'left',
  lineHeight: '1.5em'
}
const centerText = {
  textAlign: 'center',
  listStyleType: 'none'
}

const Objectives = () => {
  return (
    <div style={modalStyle}>
      <div className="Modal-heading">
        Objectives
      </div>
      <div>
        <p>Goal: Crack the randomly generated color sequence by selecting colors and placing them on a row.</p>
        <br/><br/>
        <div style={instructions}>
          <p>Step 1: Select a color from the bottom color palette.</p>
          <p>Step 2: Click any number of buttons (pegs) in the first row.  Rows are turn based and you may only
          click in the 'current' row.</p>
          <p>Step 3: Check your color code by selecting the 'Play' button on the right hand side.</p>
          <p>Step 4: Markers are show indicating your code's correctness.</p>
          <ul style={centerText}>
            <li>Black for correct color and correct location.</li>
            <li>White for correct color only.</li>
          </ul>
          <p>Step 5: Continue until the code is cracked or you've run out of turns, whatever comes first!</p>
        </div>
        <br/>
        <h3 style={finalWarning}>Can you Crack the Code???</h3>
      </div>
    </div>
  )
}

export default Objectives
