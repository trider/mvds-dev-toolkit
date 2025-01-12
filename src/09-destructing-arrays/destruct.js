//Desctuct arrarys

const stars = "*".repeat(8);

let arr = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = arr;



console.log(stars)
console.log(a); // 1
console.log(stars)
console.log(arr)
console.log(stars)



const nums = [1];
const [num1, num2 = 2, num3=3] = nums;
console.log(num1); // 1
console.log(stars)
console.log(num2); // 2
console.log(stars)
console.log(num3); // 3
console.log(stars)


const numbers = [1, 2, 3, 4, 5];

// Collect the rest elements
const [first, second, ...rest] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]