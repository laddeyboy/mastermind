const initialState = {
  gameName: 'MasterMind',
  playerName: 'Dev Player',
  isMainModalOpen: true,
  newGame: true,
  activeColor: 'white',
  currentAttempt: 0,
  correctSequence: [],
  gameboard: [
    ['white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white']
  ]
}

function mmStore (state, action) {
  if (state === undefined) {
    return initialState
  }
  switch (action.type) {
    case 'TOGGLE_MAIN_MODAL':
      // copy state
      var newState = {...state}
      newState.isMainModalOpen = !newState.isMainModalOpen
      return newState
    case 'SET_PLAYER_NAME':
      newState = {...state}
      newState.playerName = action.data
      return newState
    case 'SET_ACTIVE_COLOR':
      newState = {...state}
      newState.activeColor = action.data
      return newState
    case 'SET_PEG_COLOR':
    // this may not work?  am I return the whole updated gameboard back or just an item?
      newState = {...state}
      newState.gameboard = {...state.gameboard}
      newState.gameboard[action.rowIndex][action.colIndex] = action.data
      return newState
    case 'INCREMENT_ATTEMPT':
      newState = {...state}
      newState.currentAttempt += 1
      return newState
    case 'SET_FINAL_SEQUENCE':
      newState = {...state}
      newState.correctSequence = action.data
      return newState
    case 'TOGGLE_NEW_GAME':
      // copy state
      newState = {...state}
      newState.newGame = !newState.newGame
      return newState
    default:
      return state
  }
}

export default mmStore
