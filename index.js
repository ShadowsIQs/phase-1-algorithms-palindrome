function isPalindrome(word) {
  let flipWord = word.split("").reverse().join("");

  if (flipWord === word){
    return true
  } else {
    return false
  }
}

/* 
  if the word were to be reversed it would still read the same as before.

  if the reversed input is the same as the input
    return true
  else
    return false
*/
/*
  First i make a variable and set it to flipWord. afterwards 
  i take the input and reverse it. than compare flipWord to 
  the first input given
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
}

module.exports = isPalindrome;
