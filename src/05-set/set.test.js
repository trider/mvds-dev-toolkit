const setGen = require('./set.js'); // Adjust the path as necessary
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;


describe('setGen unique values', () => {

  const consoleLogSpy = jest.spyOn(console, 'log')
  const args = [1, 2, 3, 4, 5];


  beforeEach(() => {
    result = setGen(...args);
  });

  test('should log each value to the console', () => {
    expect(consoleLogSpy).toHaveBeenCalledTimes(args.length);
  });

  test.each(args)('should log each value to the console', (data) => {
   expect(consoleLogSpy).toHaveBeenNthCalledWith(data, data)
  })
  

})


describe('setGen duplicate values', () => {

 const consoleLogSpy = jest.spyOn(console, 'log')
 const args = [1, 2, 3, 4, 5, 5];


 beforeEach(() => {
   result = setGen(...args);
 });

 test('should log each value to the console', () => {
   expect(result).toBe(args.length - 1);
 })




 test.each(args)('should log each value to the console', (data) => {
  expect(consoleLogSpy).toHaveBeenNthCalledWith(data, data)
 })
 
 

})






