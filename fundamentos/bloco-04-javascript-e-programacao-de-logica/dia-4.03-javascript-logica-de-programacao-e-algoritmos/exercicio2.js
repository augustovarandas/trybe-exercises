let word = "Trybe";
let wordinverted = [];

result = word.split ("");

for (i = result.length - 1; i >= 0; i -= 1) {
    wordinverted.push (result[i])
}

console.log (wordinverted);