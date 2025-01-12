const fibonacci = require('./generator');


const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

describe('fibonacci', () => {
 const fib = fibonacci();

 test('should return the expected output', () => {
   expect(fib.next().value).toBe(0);
   expect(fib.next().value).toBe(1);
   expect(fib.next().value).toBe(1);
   expect(fib.next().value).toBe(2);
   expect(fib.next().value).toBe(3);
   expect(fib.next().value).toBe(5);
   expect(fib.next().value).toBe(8);
   expect(fib.next().value).toBe(13);
   expect(fib.next().value).toBe(21);
 });
})

