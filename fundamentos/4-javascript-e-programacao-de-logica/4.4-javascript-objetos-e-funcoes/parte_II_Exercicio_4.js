function mostCharacters(names) {
  let biggestWord = names[0];
  for (let index in names) {
    if (biggestWord.length < names[index].length) {
      biggestWord = names[index];
    }
  }
  return biggestWord;
}

console.log(mostCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));