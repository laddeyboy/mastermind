import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
// import App from './App'
import registerServiceWorker from './registerServiceWorker'

// React Router Dependencies
import {Route, BrowserRouter} from 'react-router-dom'
import IntroScreen from './Components/IntroScreen'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path={'/'} exact component={IntroScreen} />
          {/* <Route path={'/questions'} exact component={QuestionPage} />
          <Route path={'/endgame'} exact component={EndGame} /> */}
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
