const Strategy = require('./stratergy');
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

describe('Strategy', () => {
 const strategy = new Strategy();
 
 test('should execute the add strategy with the given arguments', () => {
  const addStrategy = {
   execute: (a, b) => {
    return a + b;
   }
  }; 
 
  expect(strategy.execute(addStrategy, 1, 2)).toBe(3);
 });

 test('should execute the multiply strategy with the given arguments', () => {
  const multiplyStrategy = {
   execute: (a, b) => {
    return a * b;
   }
  };
 
  expect(strategy.execute(multiplyStrategy, 2, 3)).toBe(6);
 });

 
})