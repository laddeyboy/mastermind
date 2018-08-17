import React, {Component} from 'react'

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
      btnStyle.backgroundColor = this.props.color
    }
    return (
      <div style={btnStyle} onClick={this.props.clickFn}>
      </div>
    )
  }
}

export default PegButton
