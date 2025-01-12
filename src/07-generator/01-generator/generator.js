/*
Generator Function
- A generator function is a special type of function that can pause its execution and yield control back to the caller. 
- When a generator function is called, it returns an iterator object that can be used to iterate over the values produced by the generator function.
- Generator functions are defined using the function* syntax, which is similar to the function keyword but with an asterisk (*) after the function keyword.
*/

// Example 1: Creating a generator function
function* generatorFunction() {
  yield 'a';
  yield 'b';
  yield 'c';
}

// Create a generator object
const generate = () => {
  console.log('Generator Function:');
  const generator = generatorFunction();

  // Iterate over the values produced by the generator
  for (const value of generator) {
    console.log(value);
  }
}

// generate();



module.exports = generatorFunction // Do not remove. This allows the function to be imported by other modules
 

