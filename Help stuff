// 1) Порахувати кількість парних чисел
// Given an array of numbers.
// Count how many even numbers are in the array.

function sumEvenIndices(nums) {
  let sum = 0; 

  // 1. function that will loop through the array and check if the current index is even
  for (let i = 0; i < nums.length; i += 2) {
    
    // 2. add the value of the current index to our sum
    sum = sum + nums[i]; 
  }

  return sum; // 3. returning the result
}

// Test cases
console.log(sumEvenIndices([1, 2, 3, 4, 5, 6])); // 9
console.log(sumEvenIndices([10, 15, 20, 25]));   // 30
console.log(sumEvenIndices([1, 3, 5, 7]));       // 6
console.log(sumEvenIndices([2, 4, 6, 8]));       // 10
