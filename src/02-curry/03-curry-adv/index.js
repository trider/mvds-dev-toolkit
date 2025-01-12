

/**
 * A higher-order function that implements currying.
 * @param {Function} fn - The function to be curried.
 * @returns {Function} - The curried function.
 */

const curry = (fn) => {
  return (...args) => {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return (...args2) => {
        return curried.apply(this, args.concat(args2));
      };
    }
  };

};

const add = (...args) => {
  return args.reduce((acc, val) => acc + val, 0);
};





const curriedAdd = curry(add);
console.log(curriedAdd(1,2,3)); // Outputs: 6

// module.exports = [curry, add, curriedAdd]; // Do not remove. This allows the function to be imported by other modules

