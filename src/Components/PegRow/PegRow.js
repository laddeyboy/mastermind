import React, {Component} from 'react'
import './PegRow.css'
import PegButton from '../PegButton/PegButton'
import MarkerBox from '../MarkerBox/MarkerBox'

const x = {foo: 'bar'}
x.foo = 'Josh'
console.log(x)

class PegRow extends Component {
  render () {
    return (
      <div className="PegRow-container">
        <div className="PegRow-btn-container">
          <PegButton />
          <PegButton color="blue"/>
          <PegButton color="yellow"/>
          <PegButton color="green"/>
        </div>
        <div className="PegRow-markers-container">
          <MarkerBox />
        </div>
      </div>
    )
  }
}

export default PegRow
