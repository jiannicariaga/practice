function solution(coins, price) {
  let count = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    while (price >= coins[i]) {
      price -= coins[i];
      count++;
    }
  }
  return count;
}

solution([1, 2, 10], 28);
