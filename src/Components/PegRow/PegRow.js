import React, {Component} from 'react'
import './PegRow.css'
import PegButton from '../PegButton/PegButton'
import MarkerBox from '../MarkerBox/MarkerBox'

class PegRow extends Component {
  render () {
    return (
      <div className="PegRow-container">
        <div className="PegRow-btn-container">
          <PegButton />
          <PegButton />
          <PegButton />
          <PegButton />
        </div>
        <div className="PegRow-markers-container">
          <MarkerBox />
        </div>
      </div>
    )
  }
}

export default PegRow
