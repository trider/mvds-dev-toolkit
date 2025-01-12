/**
 * Finds the smallest missing positive integer in an array.
 *
 * @param {number[]} A - The input array of integers.
 * @returns {number} The smallest missing positive integer.
 */
const findSmallestMissingPositiveInteger=(A)=> {
 // Create a set to store the integers in the array
 const integerSet = new Set(A);

 // Start checking from 1 upwards
 let smallestMissing = 1;

 // Loop until we find a number not in the set
 while (integerSet.has(smallestMissing)) {
     smallestMissing++;
 }

 return smallestMissing;
}

// Example usage
// const array = [1, 3, 6, 4, 1, 2];
// console.log(findSmallestMissingPositiveInteger(array)); // Output: 5

// const array2 = [1, 2, 3];
// console.log(findSmallestMissingPositiveInteger(array2)); // Output: 4

// const array3 = [-1, -3];
// console.log(findSmallestMissingPositiveInteger(array3)); // Output: 1

module.exports = findSmallestMissingPositiveInteger; // Do not remove. This allows the function to be imported by other modules