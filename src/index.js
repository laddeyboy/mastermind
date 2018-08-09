import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
// import App from './App'
import registerServiceWorker from './registerServiceWorker'

// React Router Dependencies
import {Route, BrowserRouter} from 'react-router-dom'
import IntroScreen from './Components/IntroScreen'
import GameScreen from './Components/GameScreen'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path={'/'} exact component={IntroScreen} />
          <Route path={'/game'} exact component={GameScreen} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
