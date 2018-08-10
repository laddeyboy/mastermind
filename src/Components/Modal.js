import React, {Component} from 'react'
import './Modal.css'

class Modal extends Component {
  onBtnClick (e) {
    this.props.toggleModal()
  }

  render () {
    console.log('TEST', this.props.toggleModal)
    return (
      <div className="Modal-background">
        <div className="Modal-window">
          <div className="Modal-heading">
            Mastermind
          </div>
          <div>
            <input className="Modal-name-input" type="text" value="Enter Player Name"></input>
          </div>

          <label for="btns">Select a game mode:</label><br/>
          <button className="Modal-btn" id="btns"
            onClick={() => this.onBtnClick()}>Single Player</button>
          <button className="Modal-btn"
            onClick={() => this.onBtnClick()}>Multiplyer</button>
        </div>
      </div>
    )
  }
}

export default Modal
