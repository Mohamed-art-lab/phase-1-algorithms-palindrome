function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase();
  
  const reversedWord = lowerCaseWord.split('').reverse().join('');
  return lowerCaseWord === reversedWord;
}

/* 
  convert the input word to lowercase.
  reverse the lowercase word.
  check if the reversed word is equal to the original word.
*/

/*
  The function starts by converting the input word to lowercase to ensure a case-insensitive comparison. It then reverses
  the lowercase word using the split, reverse, and join array methods. Finally, it checks if the reversed word is identical to
  the original word, returning true if they match and false otherwise.
*/

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;