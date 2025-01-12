// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// Example
// moveZeros([1, 0, 1, 2, 0, 1, 3]) // [1, 1, 2, 1, 3, 0, 0]

function moveZeros(arr) {
 return arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0));
}

console.log(moveZeros([1, 0, 1, 2, 0, 1, 3])); // [1, 1, 2, 1, 3, 0, 0]

