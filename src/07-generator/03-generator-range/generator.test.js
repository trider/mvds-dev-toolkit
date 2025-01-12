const range = require('./generator');


const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

describe('range', () => {
  const rangeGenerator = range(1, 10, 2);
  
  test('should return the expected output', () => {
    expect(rangeGenerator.next().value).toBe(1);
    expect(rangeGenerator.next().value).toBe(3);
    expect(rangeGenerator.next().value).toBe(5);
    expect(rangeGenerator.next().value).toBe(7);
    expect(rangeGenerator.next().value).toBe(9);
    expect(rangeGenerator.next().value).toBe(undefined);
    
    // expect(rangeGenerator.next().value).toBe(undefined);
  });
});

