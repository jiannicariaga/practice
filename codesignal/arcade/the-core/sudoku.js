function solution(grid) {
  const hasDuplicates = arr => arr.every(arr => arr.every((num, i, arr) => i === arr.indexOf(num)));
  const rowsAreUnique = hasDuplicates(grid);
  const colsAreUnique = hasDuplicates(grid.map((_, i) => grid.map((_, j) => grid[j][i])));
  const squaresAreUnique = hasDuplicates(grid
    .map((_, i) => grid.map((_, j) => grid[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)]))
  );
  return rowsAreUnique && colsAreUnique && squaresAreUnique;
}

solution([
  [1, 3, 2, 5, 4, 6, 9, 8, 7],
  [4, 6, 5, 8, 7, 9, 3, 2, 1],
  [7, 9, 8, 2, 1, 3, 6, 5, 4],
  [9, 2, 1, 4, 3, 5, 8, 7, 6],
  [3, 5, 4, 7, 6, 8, 2, 1, 9],
  [6, 8, 7, 1, 9, 2, 5, 4, 3],
  [5, 7, 6, 9, 8, 1, 4, 3, 2],
  [2, 4, 3, 6, 5, 7, 1, 9, 8],
  [8, 1, 9, 3, 2, 4, 7, 6, 5]
]);
