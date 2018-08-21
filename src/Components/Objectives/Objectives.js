import React from 'react'

const finalWarning = {
  color: '#00d8ff'
}
const instructions = {
  marginTop: '15px',
  textAlign: 'center',
  lineHeight: '1.5em'
}
const centerText = {
  textAlign: 'center',
  listStyleType: 'none'
}

const Objectives = () => {
  return (
    <div className="Objective-window">
      <div className="Objective-heading">
        Objectives
      </div>
      <div>
        <div>
          <p className="Objective-step">Goal: Crack the randomly generated color sequence by selecting colors and placing them on a row.</p>
        </div>
        <div style={instructions}>
          <p className="Objective-step">Step 1:</p>
           Select a color from the bottom color palette.<br/>
          <p className="Objective-step">Step 2:</p>
          Click any peg to set it to the selected palette color.
            Rows are turn based and you may only click in the 'current' row.<br/>
          <p className="Objective-step">Step 3:</p>
          Check your color code by selecting the 'Play' button on the right hand side.<br/>
          <p className="Objective-step">Step 4:</p>
          Markers are show indicating your code's correctness.<br/>
          <ul style={centerText}>
            <li>Black for correct color and correct location.</li>
            <li>White for correct color only.</li>
          </ul>
          <p className="Objective-step">Step 5:</p>
          Continue until the code is cracked or you've run out of turns, whatever comes first!
        </div>
        <br/>
        <h3 style={finalWarning}>Can you Crack the Code???</h3>
      </div>
    </div>
  )
}

export default Objectives
