function checkPalindrome (word) {
  for (index in word) {
    if (word[index] == word[(word.length - 1) - index]) {
      return true;
    } else {
      return false;
    }
  }
  
}

console.log (checkPalindrome('desenvolvimento')); 