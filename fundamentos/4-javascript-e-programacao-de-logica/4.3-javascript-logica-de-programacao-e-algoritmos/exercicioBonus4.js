let n = 5;
let symbol = '*';
let inputLine = '';
let middleOfPiramid = (n + 1) / 2
let controlRight = middleOfPiramid;
let controlLeft = middleOfPiramid;

for (let lineIndex = 0; lineIndex < middleOfPiramid; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex +=1) {
    if (columnIndex <= controlRight && columnIndex >= controlLeft) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlLeft -= 1;
  controlRight += 1;
};