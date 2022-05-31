//Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.

function majorityElement(nums) {  // O(n)
  let majority = nums[0]; // set the majority to the first element
  let count = 0;  // start with 0
  for (let i = 0; i < nums.length; i++) { // iterate through the array
    if (nums[i] === majority) { // if the current element is equal to the majority element
      count++; // increment the count
    } else {
      count--; // if the current element is not equal to the majority element
    }
    if (count === 0) { // if the count is 0
      majority = nums[i]; // set the majority to the current element
      count = 1; // set the count to 1
    }
  }
  return majority; // return the majority element
}