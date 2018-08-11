const TOGGLE_MAIN_MODAL = 'TOGGLE_MAIN_MODAL'
const SET_PLAYER_NAME = 'SET_PLAYER_NAME'

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
