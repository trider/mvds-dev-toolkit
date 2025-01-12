/**
 * Singleton Pattern
 * Ensures a class has only one instance and provides a global point of access to it.
 */

const Singleton = (function() {
 let instance;

 /**
  * Creates a new instance of the Singleton class.
  * @returns {Object} The singleton instance.
  */
 function createInstance() {
  const object = new Object('I am the instance');
  return object;
 }

 return {
  /**
   * Retrieves the singleton instance.
   * @returns {Object} The singleton instance.
   */
  getInstance: function() {
   if (!instance) {
    instance = createInstance();
   }
   return instance;
  }
 };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true

module.exports = Singleton; // Do not remove. This allows the function to be imported by other modules