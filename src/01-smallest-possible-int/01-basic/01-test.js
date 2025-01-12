/**
 * Sorts an array of numbers in ascending order, removes negative numbers, and finds the smallest positive integer missing from the array.
 * @param {number[]} A - The input array of numbers.
 * @returns {number} - The smallest positive integer missing from the array.
 */
const testFunc =(A) => {
  A = A.sort((a, b) => a - b).filter(res => res > 0)
  let val = 1
  for (let i = 1; i < A.length+i; i++) {
   if(A.filter(res => res === i).length === 0){
     val = i 
     break
   }
  }
  return val

}


console.log(testFunc([1, 3, 6, 4, 1, 2])) // 1
console.log(testFunc([1, 2, 3])) // 1
console.log(testFunc([-1, -5])) // 1

module.exports = testFunc; 

