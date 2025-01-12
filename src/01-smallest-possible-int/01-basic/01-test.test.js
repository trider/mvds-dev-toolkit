

const testFunc = require('./01-test.js'); // Adjust the path as necessary
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

describe('testFunc', () => {
  test('should return the smallest positive integer missing from the array:5', () => {
    expect(testFunc([1, 3, 6, 4, 1, 2])).toBe(5);
  });

  test('should return the smallest positive integer missing from the array:4', () => {
    expect(testFunc([1, 2, 3])).toBe(4);
  });

  test('should return the smallest positive integer missing from the array:1', () => {
    expect(testFunc([-1, -5])).toBe(1);
  });
});