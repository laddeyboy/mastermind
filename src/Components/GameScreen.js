import React, { Component } from 'react'
import logo from '../logo.svg'
import './GameScreen.css'
// React Router Dependency
import {Link} from 'react-router-dom'

// React Sibling Components
import Modal from './Modal'

class GameScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalOpen: true
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    this.setState({isModalOpen: !this.state.isModalOpen})
  }

  render () {
    return (
      <div className="GameScreen-container">
        <div className="GameScreen-board">
          <h1>HELLO TESTER</h1>
          <Link to='/'>
            <button className="GameScreen-btn">DEBUG-RESET</button>
          </Link>
          {this.state.isModalOpen && <Modal toggleModal={this.toggleModal}/>}
        </div>
      </div>
    )
  }
}

export default GameScreen
