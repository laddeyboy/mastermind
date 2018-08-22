
export function createRandomSolution () {
  const colorTemplate = ['red', 'blue', 'yellow', 'green']
  let solutions = []
  for (let x = 0; x < 4; x++) {
    solutions.push(colorTemplate[Math.floor(Math.random() * 4)])
  }
  console.log("[gameLogic.js] here's my sequence ", solutions)
  // return a winning solution array
  return solutions
}

export function deepCopy (x) {
  return JSON.parse(JSON.stringify(x))
}

export function checkPlayerSequenece (solution, playerSequence) {
  // I have to deep copy my array here.
  if (solution.length !== 4 || playerSequence.length !== 4) {
    console.log('ERROR: something went wrong array lengths NOT equal')
  }
  let tempSolution = deepCopy(solution)
  let tempPlayerSequence = deepCopy(playerSequence)
  let markerBackgrounds = []
  for (let i = 0; i < tempPlayerSequence.length; i++) {
    if (tempPlayerSequence[i] === tempSolution[i]) {
      markerBackgrounds.push('black')
      tempPlayerSequence.splice(i, 1)
      tempSolution.splice(i, 1)
      i -= 1
    }
  }
  for (let i = 0; i < tempPlayerSequence.length; i++) {
    for (let j = 0; j < tempSolution.length; j++) {
      if (tempPlayerSequence[i] === tempSolution[j]) {
        markerBackgrounds.push('white')
        tempPlayerSequence.splice(i, 1)
        tempSolution.splice(j, 1)
        i -= 1
        j -= 1
      }
    }
  }
  while (markerBackgrounds.length < 4) {
    markerBackgrounds.push('gray')
  }
  return markerBackgrounds
  // return [blackCtr, whiteCtr]
}
