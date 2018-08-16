import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import IntroScreen from './Components/IntroScreen/IntroScreen'

class App extends Component {
  render () {
    return (
      <div className="App">
        <IntroScreen />
      </div>
    )
  }
}

export default App
