import React, {Component} from 'react'
import './PegRow.css'

class PegRow extends Component {
  render () {
    return (
      <div>
        <div className="PegRow-container">
          <button className="PegRow-btn">btn1</button>
          <button className="PegRow-btn">btn2</button>
          <button className="PegRow-btn">btn3</button>
          <button className="PegRow-btn">btn4</button>
        </div>
      </div>
    )
  }
}

export default PegRow
