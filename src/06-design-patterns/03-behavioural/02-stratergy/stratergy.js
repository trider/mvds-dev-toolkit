/**
 * Strategy Pattern
 * - Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
 * - It is a behavioural design pattern that enables selecting an algorithm at runtime.
 * - It defines a family of algorithms, encapsulates each one, and makes them interchangeable.
 * - Strategy lets the algorithm vary independently from clients that use it.
 *
 * When to use?
 * - When you need different variants of an algorithm.
 * - When you need to change an algorithm at runtime.
 * - When an algorithm uses data that clients shouldn’t know about.
 */

/**
 * Represents a Strategy.
 * @constructor
 */
function Strategy() {
 /**
  * Executes the specified strategy with the given arguments.
  * @param {Object} strategy - The strategy to execute.
  * @param {...any} args - The arguments to pass to the strategy.
  * @returns {*} - The result of executing the strategy.
  */
 this.execute = function(strategy, ...args) {
  return strategy.execute(...args);
 };
}

/**
 * Represents an add strategy.
 */
const addStrategy = {
 /**
  * Executes the add strategy with the given arguments.
  * @param {number} a - The first number to add.
  * @param {number} b - The second number to add.
  * @returns {number} - The sum of the two numbers.
  */
 execute: (a, b) => {
  return a + b;
 }
};

/**
 * Represents a multiply strategy.
 */
const multiplyStrategy = {
 /**
  * Executes the multiply strategy with the given arguments.
  * @param {number} a - The first number to multiply.
  * @param {number} b - The second number to multiply.
  * @returns {number} - The product of the two numbers.
  */
 execute: (a, b) => {
  return a * b;
 }
};

const strategy = new Strategy();

// Execute the strategies
// console.log(strategy.execute(addStrategy, 1, 2)); // 3
// console.log(strategy.execute(multiplyStrategy, 2, 3)); // 6

module.exports = Strategy,addStrategy,multiplyStrategy; // Do not remove. This allows the function to be imported by other modules 