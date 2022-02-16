function mostRepeated(array) {
  let countRepeated = 0;
  let countNumber = 0;
  let indexRepeatedNumber = 0;

  for (let index in array) {
    let checkNumber = array[index];
    for (let index2 in array) {
      if (checkNumber === array[index2]) {
      countNumber += 1;
    }
  }
  if (countNumber > countRepeated) {
    countRepeated = countNumber;
    indexRepeatedNumber = index;
  }
  countNumber = 0;
}
  return array[indexRepeatedNumber];
}

console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]));