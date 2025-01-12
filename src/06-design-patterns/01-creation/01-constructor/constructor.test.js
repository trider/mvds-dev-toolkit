// constructor.test.js

// Step 1: Import the necessary modules and classes
const Person = require('./constructor');
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

// Step 2: Describe the test suite
describe('Person', () => {
  // Step 3: Write the test
  test('should create a new instance of Person', () => {
    const person = new Person('John', 30);
    expect(person).toEqual({ name: 'John', age: 30 });
  });

  test('should greet the person', () => {
    const person = new Person('John', 30);
    const spy = jest.spyOn(console, 'log');
    person.greet();
    expect(spy).toHaveBeenCalledWith('Hello, my name is John and I am 30 years old.');
  });

});
