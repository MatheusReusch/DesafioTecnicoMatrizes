// Questão 1

function invertDiagonals(matrix) {
  const size = matrix.length;
  for (let i = 0; i < size / 2; i++) {
    // Inverte a diagonal principal
    const temp = matrix[i][i];
    matrix[i][i] = matrix[size - 1 - i][size - 1 - i];
    matrix[size - 1 - i][size - 1 - i] = temp;

    // Inverte a segunda diagonal
    const tempSecondary = matrix[i][size - 1 - i];
    matrix[i][size - 1 - i] = matrix[size - 1 - i][i];
    matrix[size - 1 - i][i] = tempSecondary;
  }
  return matrix;
}

// Questão 2

function countSubmatrixOccurrences(A, B) {
  const rowsA = A.length;
  const colsA = A[0].length;
  const rowsB = B.length;
  const colsB = B[0].length;
  let count = 0;

  for (let i = 0; i <= rowsA - rowsB; i++) {
    for (let j = 0; j <= colsA - colsB; j++) {
      if (isSubmatrixAtPosition(A, B, i, j)) {
        count++;
      }
    }
  }

  return count;
}

function isSubmatrixAtPosition(A, B, inicioRow, inicioCol) {
  const rowsB = B.length;
  const colsB = B[0].length;

  for (let i = 0; i < rowsB; i++) {
    for (let j = 0; j < colsB; j++) {
      if (A[inicioRow + i][inicioCol + j] !== B[i][j]) {
        return false;
      }
    }
  }

  return true;
}
