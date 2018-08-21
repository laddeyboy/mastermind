import React, {Component} from 'react'
import './Modal.css'
import Objectives from '../Objectives/Objectives'


// Redux Imports
import {connect} from 'react-redux'
import {toggleMainModalWindow, setPlayerName, showObjectives} from '../../redux/actions'


class Modal extends Component {

  onBtnClick (e) {
    if(e.target.value === 'single'){
      this.props.toggleMainModal()
    } else if(e.target.value === 'objectives'){
      this.props.showObjectives()
    }
  }
  
  closeObjectiveHandler = () => {
    this.props.showObjectives()
  }

  setNameHandler = (event) => {
    this.props.setPlayerName(event.target.value)
  }

  render () {

    return (
      <div className="Modal-background">
      {!this.props.showObjective ?
        <div className="Modal-window">
          <div className="Modal-heading">
            Mastermind
          </div>
          <div>
            <input className="Modal-name-input"
              type="text"
              value={this.props.playerName}
              placeholder="Enter Player Name"
              onFocus={(e) => e.target.value=""}
              onChange={this.setNameHandler}></input>
          </div>
          <div className="Modal-buttons">
            {/* <label htmlFor="btns">Select a game mode:</label><br/> */}
            <button className="Modal-btn" id="btns" value="single"
              onClick={(e) => this.onBtnClick(e)}>Single Player</button>
            <button className="Modal-btn" value="objectives"
              onClick={(e) => this.onBtnClick(e)}>Objective</button>
          </div>
        </div>
        : <Objectives clicked={this.closeObjectiveHandler}/>}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isMainModalOpen: state.isMainModalOpen,
    playerName: state.playerName,
    showObjective: state.showObjectives
  }
}
function mapDispatchToProps (dispatch) {
  return {
    toggleMainModal: () => {
      dispatch(toggleMainModalWindow())
    },
    setPlayerName: (data) => {
      dispatch(setPlayerName(data))
    },
    showObjectives: () => {
      dispatch(showObjectives())
    }
  }
}

var reduxModal = connect(mapStateToProps, mapDispatchToProps)(Modal)

export default reduxModal
