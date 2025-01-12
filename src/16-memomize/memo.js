/* 
The memoize function:Supports functions with a different number of parameters.
Allows function parameters to be objects.
Normalizes object values (key-value pairs and their order), i.e. if a memoized function accepts objects and it is given two or more objects that have exactly the same key-value pairs, 
but the order of the pairs appears to be different, then the memoized function will treat them as if they were the same object. */


/**
 * Memoizes a function.
 * @param {Function} func - The function to be memoized.
 *  @returns {Function} - The memoized function.
 */
const memoize = (func) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, func(...args));
    }
    return cache.get(key);
  };
}
