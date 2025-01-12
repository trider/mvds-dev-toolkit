const towerBuilder = require('./pyramid');
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

describe('towerBuilder', () => {
  test('should return a string of 1 row', () => {
    expect(towerBuilder(1)).toBe("*");
  });
  test('should return a string of 3 rows', () => {
    expect(towerBuilder(2)).toBe(" * \n***");
  });
 
}); 
