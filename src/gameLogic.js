
export function setSolutionSequence () {
  const colorTemplate = ['red', 'blue', 'yellow', 'green']
  let solutions = []
  for (let x = 0; x < 4; x++) {
    solutions.push(colorTemplate[Math.floor(Math.random() * 4)])
  }
  console.log("[gameLogic.js] here's my sequence ", solutions)
  // return a winning solution array
  return solutions
}

function playerWins (solution, playerSequence) {
  for (let i = 0; i < solution.length; i++) {
    if (solution[i] !== playerSequence[i]) {
      return false
    }
  }
  return true
}

export function checkPlayerSequenece (solution, playerSequence) {
  if (playerWins(solution, playerSequence)) {
    return true
  }
  // let tempSolution = solution
  // let tempPlayerSequence = playerSequence
  // let numBlackPegs = 0
  // for (let i = 0; i < solution.length; i++) {
  //   if (tempSolution[i] === tempPlayerSequence[i]) {
  //     numBlackPegs += 1
  //     tempSolution.splice(i, 1)
  //     tempPlayerSequence.splice(i, 1)
  //   }
  // }
  // if (numBlackPegs === 4) {
  //   // player Wins
  //   return true
  // }
}
