function sum(number) {
  let sum = 0;
  for (let index = number; index >= 0; index -= 1) {
    sum = sum + index;
  }
  return sum
}

console.log(sum(5));