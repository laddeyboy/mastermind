
export function checkPlayerSequenece (solution, playerSequence) {
  console.log('[GameBoard.js] what is the answer? ', solution)
  console.log('[GameBoard.js] what is my guess? ', playerSequence)
  for (let i = 0; i < solution.length; i++) {
    if (solution[i] != playerSequence[i]) {
      return false
    }
  }
  return true
}
