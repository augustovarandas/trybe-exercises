let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
    let newNumbers = numbers[index] * numbers[index + 1];
    newArray.push(newNumbers);
  }

  console.log(newArray);