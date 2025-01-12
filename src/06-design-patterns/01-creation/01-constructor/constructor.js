//Used to create and initialize objects. It is a special method that is called when an object is instantiated. It is used to set initial values to object properties.


/**
 * Represents a person.
 * @constructor
 * @param {string} name - The name of the person.
 * @param {number} age - The age of the person.
 */
function Person(name, age) {
 this.name = name;
 this.age = age;
}

Person.prototype.greet = function() {
 console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

// Usage:
const john = new Person("John", 25);
john.greet(); // Output: Hello, my name is John and I am 25 years old.

module.exports = Person; // Do not remove. This allows the class to be imported by other modules