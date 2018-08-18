import React, {Component} from 'react'
// Redux Imports
import {connect} from 'react-redux'

const pegBtnStyle = {
  height: '40px',
  width: '40px',
  border: '1px solid black',
  borderRadius: '50%',
  backgroundColor: 'white'}

function deepCopy (x) {
  return JSON.parse(JSON.stringify(x))
}

class PegButton extends Component {
  render () {
    let btnStyle = deepCopy(pegBtnStyle)
    if (this.props.color) {
      if (this.props.color === this.props.activeColor) {
        btnStyle.height = '50px'
        btnStyle.width = '50px'
        btnStyle.border = '3px solid #00d8ff'
      }
      btnStyle.backgroundColor = this.props.color
    } else {
      let row = this.props.rowInd
      let col = this.props.colInd
      btnStyle.backgroundColor = this.props.gameboard[row][col]
    }
    return (
      <div style={btnStyle} onClick={this.props.clickFn}>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeColor: state.activeColor,
    gameboard: state.gameboard
  }
}

var reduxPegButton = connect(mapStateToProps)(PegButton)

export default reduxPegButton
