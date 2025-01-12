/* 
Deep clone an object 
Deep cloning an object in JavaScript can be accomplished using various methods
*/

function deepClone(obj) {
 return structuredClone(obj);
}

// Example usage:
const original = {
 name: "John",
 age: 30,
 address: {
     city: "New York",
     zip: "10001"
 },
 hobbies: ["reading", "traveling"],
 date: new Date(),
 nestedArray: [[1, 2, 3], [4, 5, 6]]
};

const clone = deepClone(original);

console.log(clone);
console.log(original); // John
console.log(clone === original); // false
console.log(clone.address === original.address); // false
console.log(clone.hobbies === original.hobbies); // false
console.log(clone.date === original.date); // false
console.log(clone.nestedArray === original.nestedArray); // false



