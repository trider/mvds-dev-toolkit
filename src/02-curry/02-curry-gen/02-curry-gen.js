

/**
 * A higher-order function that implements currying.
 * @param {Function} fn - The function to be curried.
 * @returns {Function} - The curried function.
 */

const curry = (fn) => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
  return curried;
};






const add = (a, b, c) => {
  return a + b + c;
};




const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Outputs: 6
console.log(curriedAdd(1, 2)(3)); // Outputs: 6
console.log(curriedAdd(1)(2, 3)); // Outputs: 6

module.exports = [curry, add, curriedAdd]; // Do not remove. This allows the function to be imported by other modules

