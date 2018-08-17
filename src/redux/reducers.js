var initialState = {
  gameName: 'MasterMind',
  playerName: '',
  isMainModalOpen: true,
  activeColor: 'white'
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
    default:
      return state
  }
}

export default mmStore
