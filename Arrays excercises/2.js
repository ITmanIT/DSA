// 2) Сума елементів з парними індексами
// Given an array of numbers.
// Find the sum of elements at even indices.
// (indices: 0,2,4…)

let nums = [10, 20, 30, 40, 50]; 
let sum = 0;

for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
}

console.log(sum); // 90
