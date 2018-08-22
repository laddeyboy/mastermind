import { createRandomSolution, deepCopy } from '../gameLogic'

const initialState = {
  gameName: 'MasterMind',
  playerName: 'Enter Player Name',
  // playerName: '', // placeholder="Enter Player Name..."
  isMainModalOpen: true,
  showObjectives: false,
  showEndScreen: false,
  finalMsg: '',
  newGame: true,
  activeColor: 'white',
  currentAttempt: 0,
  correctSequence: createRandomSolution(),
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
  ],
  markerBackgrounds: [
    ['gray', 'gray', 'gray', 'gray'],
    ['gray', 'gray', 'gray', 'gray'],
    ['gray', 'gray', 'gray', 'gray'],
    ['gray', 'gray', 'gray', 'gray'],
    ['gray', 'gray', 'gray', 'gray'],
    ['gray', 'gray', 'gray', 'gray'],
    ['gray', 'gray', 'gray', 'gray'],
    ['gray', 'gray', 'gray', 'gray'],
    ['gray', 'gray', 'gray', 'gray'],
    ['gray', 'gray', 'gray', 'gray']
  ],
  markerTiles: ['false', 'false', 'false', 'false', 'false',
    'false', 'false', 'false', 'false', 'false']
}

function mmStore (state, action) {
  if (!state) {
    return deepCopy(initialState)
  }
  let newState = null
  switch (action.type) {
    case 'TOGGLE_MAIN_MODAL':
      // copy state
      newState = {...state}
      newState.isMainModalOpen = !newState.isMainModalOpen
      return newState
    case 'SHOW_OBJECTIVES':
      newState = {...state}
      newState.showObjectives = !newState.showObjectives
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
      newState = {...state}
      newState.gameboard = {...state.gameboard}
      newState.gameboard[action.rowIndex][action.colIndex] = action.data
      return newState
    case 'SET_MARKER_COLOR':
      newState = {...state}
      newState.markerBackgrounds = {...state.markerBackgrounds}
      newState.markerBackgrounds[action.rowIndex][action.colIndex] = action.data
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
      newState = {...state}
      newState.newGame = !newState.newGame
      return newState
    case 'TOGGLE_MARKER_TILE':
      newState = {...state}
      newState.markerTiles[action.rowIndex] = !newState.markerTiles[action.rowIndex]
      return newState
    case 'SHOW_END_SCREEN':
      newState = {...state}
      newState.finalMsg = action.data
      newState.showEndScreen = !newState.showEndScreen
      return newState
    case 'RESET_GAME_STATE':
      newState = deepCopy(initialState)
      newState.correctSequence = createRandomSolution()
      newState.playerName = state.playerName
      newState.isMainModalOpen = state.isMainModalOpen
      return newState
    default:
      return state
  }
}

export default mmStore
