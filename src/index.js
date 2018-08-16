import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
// import App from './App'
import registerServiceWorker from './registerServiceWorker'

// React Router Dependencies
import {Route, BrowserRouter} from 'react-router-dom'
import IntroScreen from './Components/IntroScreen/IntroScreen'
import GameScreen from './Components/GameScreen'

// Redux Dependencies
import {Provider} from 'react-redux'
import store from './redux/store'

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

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
registerServiceWorker()
