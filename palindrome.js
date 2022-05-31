// implement a function returning whether a given string is a palindrome or not (a palindrome is a string that reads the same forwards and backwards)


let str = 'racecar';

function isPalindrome(str) {
  let reversed = str.split('').reverse().join(''); 
  return str === reversed;
}
console.log(isPalindrome(str));

function isPalindrome(str) {
  let reversed = ''; // empty string
  for (let i = str.length - 1; i >= 0; i--) { // start at the end of the string and go backwards
    reversed += str[i]; // add each character to the empty string
  }
  return str === reversed; // return whether the string is equal to the reversed string
}
console.log(isPalindrome(str));



