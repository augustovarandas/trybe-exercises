let word = "Trybe";
let reverseWord = [];

result = word.split ("");

for (i = result.length - 1; i >= 0; i -= 1) {
    reverseWord.push (result[i])
}

console.log (reverseWord);