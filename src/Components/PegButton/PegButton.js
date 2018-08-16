import React, {Component} from 'react'

const pegBtnStyle = {
  height: '40px',
  width: '40px',
  border: '1px solid black',
  borderRadius: '50%',
  backgroundColor: 'white'
}

function deepCopy (x) {
  return JSON.parse(JSON.stringify(x))
}

class PegButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      backgroundColor: ''
    }
  }
  PegBtnHandler () {
    if (this.props.template) {
      console.log('You want to set color to', this.props.color)
      this.setState({backgroundColor: this.props.color})
      console.log('[PegButton.js] did I set color?', this.state.backgroundColor)
    } else {
      console.log(this.state.backgroundColor)
    }
  }

  render () {
    let btnStyle = deepCopy(pegBtnStyle)
    if (this.props.color) {
      btnStyle.backgroundColor = this.props.color
    }
    return (
      <div style={btnStyle}
        onClick={() => this.PegBtnHandler()}
      ></div>
    )
  }
}

export default PegButton
