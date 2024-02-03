
const createMatrix = (clients) => {
  const matrix = clients.map(el => [])

  for (const line in matrix) {
    matrix[line] = clients.map((el) => 0);
  }

  for (let i = 0; i < clients.length; i++) {
    for (let j = 0; j < clients.length; j++) {
      matrix[i][j] =
        ((clients[j].cord_x - clients[i].cord_x) ** 2 +
          (clients[j].cord_y - clients[i].cord_y) ** 2) ** 0.5;
    }
  }

  return matrix
}

const permutateWithoutRepetitions = (permutationOptions) => {
  if (permutationOptions.length === 1) {
    return [permutationOptions];
  }

  const permutations = [];

  const smallerPermutations = permutateWithoutRepetitions(permutationOptions.slice(1));

  const firstOption = permutationOptions[0];

  for (let permIndex = 0; permIndex < smallerPermutations.length; permIndex += 1) {
    const smallerPermutation = smallerPermutations[permIndex];

    for (let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
      const permutationPrefix = smallerPermutation.slice(0, positionIndex);
      const permutationSuffix = smallerPermutation.slice(positionIndex);
      permutations.push(permutationPrefix.concat([firstOption], permutationSuffix));
    }
  }

  return permutations;
}

export const pathFinder = (clients) => {
  const adjMatrix = createMatrix(clients)

  const options = []
  for (let i = 1; i < clients.length; i++) {
    options.push(i)
  }

  const permutations = permutateWithoutRepetitions(options)


  let bestPath = []
  let minimumCost = Number.POSITIVE_INFINITY

  for (const path of permutations) {
    let cost = adjMatrix[0][path[0]];
    for (let i = 1; i < path.length; i++) {
      cost += adjMatrix[path[i - 1]][path[i]]
    }

    if (minimumCost > cost) {
      bestPath = path
      minimumCost = cost
    }
  }

  return {
    minimumCost,
    bestPath
  }
}

export default pathFinder