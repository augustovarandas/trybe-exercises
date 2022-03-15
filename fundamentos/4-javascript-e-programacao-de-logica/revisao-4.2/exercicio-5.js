let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggestNumber = [];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > biggestNumber) {
        biggestNumber = numbers[index];
    }
}

console.log(biggestNumber);