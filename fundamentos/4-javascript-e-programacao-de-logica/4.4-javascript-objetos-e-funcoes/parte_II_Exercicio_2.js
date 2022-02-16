function biggestOfNumbers(array) {
  let biggestNumber = 0;
  for (let index in array) {
    if (array[biggestNumber] < array[index]) {
      biggestNumber = index;
    }
  }
  return biggestNumber;
}

console.log(biggestOfNumbers([2, 3, 6, 7, 10, 1]));