let n = 7;
let symbol = '*';

let middleOfPiramid = (n + 1) / 2;
let controlRight = middleOfPiramid;
let controlLeft = middleOfPiramid;

for (let lineIndex = 1; lineIndex <= middleOfPiramid; lineIndex += 1) {
  let inputLine = '';
  for (let columnIndex = 1; columnIndex <= n; columnIndex +=1) {
    if (columnIndex == controlRight || columnIndex == controlLeft || lineIndex === middleOfPiramid) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  controlLeft -= 1;
  controlRight += 1;
};