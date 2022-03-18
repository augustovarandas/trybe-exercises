let symbol = '* ';
let n = 5;
let line = '';

for (let l = 1; l <= n; l += 1) {
    line = line + symbol;
};

for (let c = 1; c <= n; c += 1) {
    console.log(line);
}