const generatorFunction = require('./generator');

const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

describe('generatorFunction', () => {
 const generator = generatorFunction();

 test('should return the expected output', () => {
   expect(generator.next().value).toBe('a');
   expect(generator.next().value).toBe('b');
   expect(generator.next().value).toBe('c');
   expect(generator.next().value).toBe(undefined);
 });
})



