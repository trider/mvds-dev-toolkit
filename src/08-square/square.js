//JS square every digit of a number and concatenate them
const squareDigits = (num) => {
  return Number(num.toString().split('').map(res => res * res).join(''))
}


const squareDigits2 = (num) => {
 const numStr = num.toString()
 const squareDigits = Array.from(numStr).map(res => res * res).join('')
 return parseInt(squareDigits,10)
   
 
}

console.log(squareDigits(9119)) // 811181
console.log(squareDigits2(9119)) // 811181
module.exports = squareDigits, squareDigits2;