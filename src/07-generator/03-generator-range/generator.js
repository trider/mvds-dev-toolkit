/*
Generator Function
- A generator function is a special type of function that can pause its execution and yield control back to the caller. 
- When a generator function is called, it returns an iterator object that can be used to iterate over the values produced by the generator function.
- Generator functions are defined using the function* syntax, which is similar to the function keyword but with an asterisk (*) after the function keyword.
*/




// Example 3: Using a generator function to implement a range function
function* range(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

// Create a generator object
const generateRange = () => {
  console.log('\nRange: 1 to 10');
  // rangeGenerator is a generator object that generates the numbers from 1 to 10 with a step of 2.
  // range(1, 10, 2) returns a generator object that generates the numbers from 1 to 10 with a step of 2.
  const rangeGenerator = range(1, 10, 2);

  // Iterate over the values produced by the generator
  for (const value of rangeGenerator) {
    console.log(value);
  }
}

generateRange();

module.exports = range// Do not remove. This allows the function to be imported by other modules
 

