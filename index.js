
  // Write your algorithm here
  function reverseString(word) {
    const Arr = word.split("");
    const reversedArr = Arr.reverse();
    const reversedWord = reversedArr.join("");
    return reversedWord;
  }
  function isPalindrome(word) {
    const reversedWord = reverseString(word);
    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
  }
  isPalindrome("racecar");

/*
  The function should return true if the word is a palindrome and false if it is not.
  
  Split the word into a string using the string method. Then  take the split array and reverse it using the reverse method . The reverse method only acts on arrays
  after reversing arrays. Use the `.join()` method to join the array and return the results in the function
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
