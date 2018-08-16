import React, {Component} from 'react'
import './ColorPalette.css'
import PegButton from '../PegButton/PegButton'

class ColorPalette extends Component {
  render () {
    return (
      <div className="ColorP-container">
        <div className="ColorP-btn-container">
          <PegButton template={true} color="red"/>
          <PegButton template={true} color="blue"/>
          <PegButton template={true} color="yellow"/>
          <PegButton template={true} color="green"/>
        </div>
      </div>
    )
  }
}

export default ColorPalette
