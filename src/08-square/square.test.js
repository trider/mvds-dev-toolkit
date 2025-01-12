const squareDigits = require('./square');
const squareDigits2 = require('./square');
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

describe('squareDigits', () => {

 describe('squareDigits', () => {
  test('should return the expected output 811181', () => {
   expect(squareDigits(9119)).toBe(811181);
  });

  test('should return the expected output 6449436', () => {
   expect(squareDigits(8726)).toBe(6449436);
  });

  test('should return the expected output 8149369', () => {
   expect(squareDigits(9763)).toBe(8149369);
  });
 });

 describe('squareDigits2', () => {
  test('should return the expected output 811181', () => {
   expect(squareDigits2(9119)).toBe(811181);
  });
  test('should return the expected output 6449436', () => {
   expect(squareDigits2(8726)).toBe(6449436);
  }); 
  test('should return the expected output 8149369', () => {
   expect(squareDigits2(9763)).toBe(8149369);
  });
 });

});


