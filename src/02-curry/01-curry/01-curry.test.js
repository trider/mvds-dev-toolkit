const curryAdd = require('./01-curry.js');
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

describe('curryAdd', () => {

 test('should return the correct sum when the arguments are provided in separate calls', () => {
  const result = curryAdd(1)(2)(3);
  expect(result).toBe(6);
 });


 

});
