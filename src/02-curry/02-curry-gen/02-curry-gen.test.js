const curriedAdd = require('./02-curry-gen.js')[2];
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

describe('curryAdd', () => {
 it('should return the correct sum when the arguments are provided in separate calls', () => {
  const result = curriedAdd(1)(2)(3);
  expect(result).toBe(6);
 });

 

 it('should return the correct sum when the arguments are provided with zero', () => {
  const result = curriedAdd(1, 2)(3);
  expect(result).toBe(6);
 });


 it('should return the correct sum when the arguments are provided with zero', () => {
  const result = curriedAdd(1)(2, 3);
  expect(result).toBe(6);
 });
});