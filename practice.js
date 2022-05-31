//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1, num2) {
  return num1 + num2 < 100;
}


function lessThan100(a, b) {
  if (a + b < 100) {
    return true;
  } else {
    return false;
  }
}
 
//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
  let sum = 0;  // start with 0
  for (let i = 1; i <= num; i++) { // start at 1 and go up to the number
    sum += i; // sum = sum + i
  }
  return sum;   // return the sum
}