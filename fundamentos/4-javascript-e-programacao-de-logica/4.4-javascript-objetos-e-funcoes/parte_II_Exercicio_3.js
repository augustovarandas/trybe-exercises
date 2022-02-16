function smallestOfNumbers(array) {
  let smallestNumber = 0;
  for (let index in array) {
    if (array[smallestNumber] > array[index]) {
      smallestNumber = index;
    }
  }
  return smallestNumber;
}

console.log(smallestOfNumbers([2, 4, 6, 7, 10, 0, -3]));