const isPrime = require('./prime');
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;


describe('isPrime', () => {
  test('should return false if the number 0 is prime', () => {
    expect(isPrime(0)).toBe(false);
  });
  test('should return false if the number 1 is prime', () => {
    expect(isPrime(1)).toBe(false);
  });
  test('should return true if the number 2 is prime', () => {
    expect(isPrime(2)).toBe(true);
  });
  test('should return true if the number 3 is prime', () => {
    expect(isPrime(3)).toBe(true);
  });
  test('should return false if the number 4 is prime', () => {
    expect(isPrime(4)).toBe(false);
  });
});