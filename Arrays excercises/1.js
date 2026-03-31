function sumEvenNumbers(nums) {
  let sum = 0; 

  // 1. Loop through every single element in the array
  for (let i = 0; i < nums.length; i++) {
    
    // 2. Check if the VALUE (nums[i]) is even
    // (A number is even if dividing it by 2 leaves a remainder of 0)
    if (nums[i] % 2 === 0) {
      sum += nums[i]; 
    }
  }

  return sum; 
}

// Test cases
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12 (2 + 4 + 6)
console.log(sumEvenNumbers([10, 15, 20, 25]));  // 30 (10 + 20)
console.log(sumEvenNumbers([1, 3, 5, 7]));      // 0  (no even numbers)
console.log(sumEvenNumbers([2, 4, 6, 8]));      // 20 (2 + 4 + 6 + 8)
