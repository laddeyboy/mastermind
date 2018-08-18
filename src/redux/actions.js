const TOGGLE_MAIN_MODAL = 'TOGGLE_MAIN_MODAL'
const SET_PLAYER_NAME = 'SET_PLAYER_NAME'
const SET_ACTIVE_COLOR = 'SET_ACTIVE_COLOR'
const SET_PEG_COLOR = 'SET_PEG_COLOR'
const INCREMENT_ATTEMPT = 'INCREMENT_ATTEMPT'

export function toggleMainModalWindow () {
  return {
    type: TOGGLE_MAIN_MODAL
  }
}
export function setPlayerName (data) {
  return {
    type: SET_PLAYER_NAME,
    data: data
  }
}
export function setActiveColor (data) {
  return {
    type: SET_ACTIVE_COLOR,
    data: data
  }
}
export function setPegColor (rowIndex, colIndex, data) {
  return {
    type: SET_PEG_COLOR,
    rowIndex: rowIndex,
    colIndex: colIndex,
    data: data
  }
}
export function incrementAttemptCtr () {
  return {
    type: INCREMENT_ATTEMPT
  }
}
