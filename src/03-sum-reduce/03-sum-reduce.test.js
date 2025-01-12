const sum = require('./03-sum-reduce.js');
const test = require('@jest/globals').test; 
const expect = require('@jest/globals').expect;

describe('sum', () => {
  test('should return the sum of the arguments:to be 15', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });
});
