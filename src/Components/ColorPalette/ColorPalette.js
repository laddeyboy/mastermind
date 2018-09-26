import React, {Component} from 'react'
import './ColorPalette.css'
import PegButton from '../PegRow/PegButton/PegButton'

// Redux Imports
import {connect} from 'react-redux'
import {setActiveColor} from '../../redux/actions'

class ColorPalette extends Component {
  selectPaletteColor (color) {
    this.props.setActiveColor(color)
  }
  render () {
    return (
      <div className="palette-container">
        <div className="palette-header">
          <p>Set Peg Color Below</p>
        </div>
        <div className="palette-btn-container">
          <PegButton clickFn={() => this.selectPaletteColor('red')} color="red"/>
          <PegButton clickFn={() => this.selectPaletteColor('blue')} color="blue"/>
          <PegButton clickFn={() => this.selectPaletteColor('yellow')} color="yellow"/>
          <PegButton clickFn={() => this.selectPaletteColor('green')} color="green"/>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeColor: state.activeColor
  }
}
function mapDispatchToProps (dispatch) {
  return {
    setActiveColor: (data) => {
      dispatch(setActiveColor(data))
    }
  }
}

var reduxColorPalette = connect(mapStateToProps, mapDispatchToProps)(ColorPalette)

export default reduxColorPalette
