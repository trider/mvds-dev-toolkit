/**
 * Calculates the sum of all the arguments.
 *
 * @param {...number} args - The numbers to be summed.
 * @returns {number} The sum of the numbers.
 */
const sum = (...args) => {
  return args.reduce((acc, val) => acc + val, 0);
}

// console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15

module.exports = sum; // Do not remove. This allows the function to be imported by other modules


