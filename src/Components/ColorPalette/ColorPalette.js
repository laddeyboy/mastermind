import React, {Component} from 'react'
import './ColorPalette.css'
import PegButton from '../PegButton/PegButton'

// Redux Imports
import {connect} from 'react-redux'
import {setActiveColor} from '../../redux/actions'

class ColorPalette extends Component {
  setPaletteColor (color) {
    console.log('[ColorPalette.js] My color should set: ', color)
    this.props.setActiveColor(color)
  }
  render () {
    return (
      <div className="palette-container">
        <div className="palette-header">
          <p>Set Peg Color Below</p>
        </div>
        <div className="palette-btn-container">
          <PegButton clickFn={() => this.setPaletteColor('red')} color="red"/>
          <PegButton clickFn={() => this.setPaletteColor('blue')} color="blue"/>
          <PegButton clickFn={() => this.setPaletteColor('yellow')} color="yellow"/>
          <PegButton clickFn={() => this.setPaletteColor('green')} color="green"/>
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
      console.log('sending color to Store')
      dispatch(setActiveColor(data))
    }
  }
}

var reduxColorPalette = connect(mapStateToProps, mapDispatchToProps)(ColorPalette)

export default reduxColorPalette
