/*
Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.
*/

/**
 * 
 * @param {number} a - The first input number.
 * @param {number} b - The second input number.
 * @returns {number} - The sum of all the integers between and including a and b.
 */

const intSum = (a, b) => {
  let sum = 0
  if(a === b){
    return a
  }
  if(a < b){
    for(let i = a; i <= b; i++){
      sum += i
    }
  }else{
    for(let i = b; i <= a; i++){
      sum += i
    }
  }
  return sum
}

const intSum2 = (a, b) => {
  if(a === b){
    return a
  }
  else{
   const first = Math.min(a, b)
   const last = Math.max(a, b)
 
   return (last - first + 1) * (first + last) / 2   
  }

  
}

console.log(intSum(1, 5)) // 15
console.log(intSum2(5, 1)) // 15

module.exports = intSum;