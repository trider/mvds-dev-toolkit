const arrayDiff = require('./remove');
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;


describe('arrayDiff', () => {
  test('should return the expected output [2]', () => {
   expect(arrayDiff([1, 2,], [1])).toEqual([2]);
  });
  test('should return the expected output [2, 2]', () => {
   expect(arrayDiff([1, 2, 2], [1])).toEqual([2, 2]);
  });
  test('should return the expected output [1]', () => {
   expect(arrayDiff([1, 2, 2], [2])).toEqual([1]);
  });
  test('should return the expected output [1, 2, 2]', () => {
   expect(arrayDiff([1, 2, 2], [])).toEqual([1, 2, 2]);
  });
  test('should return the expected output []', () => {
   expect(arrayDiff([], [1, 2])).toEqual([]);
  }); 
  test('should return the expected output [1, 2, 3]', () => {
   expect(arrayDiff([1, 2,3], [1, 2])).toEqual([3]);
  });
} );