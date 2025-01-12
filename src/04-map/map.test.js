const mapGen = require('./map');
const test = require('@jest/globals').test; 
const expect = require('@jest/globals').expect;

describe('mapGen', () => {

    const consoleLogSpy = jest.spyOn(console, 'log');
    const args = [1, 2, 3, 4, 5];
    // const result =  mapGen(...args);
    const testData = [
      { key:1, value:'key0 1' },
      { key:2, value:'key1 2' },
      { key:3, value:'key2 3' },
      { key:4, value:'key3 4' },
      { key:5, value:'key4 5' }
     
    ]

    beforeEach(() => {
      result = mapGen(...args);
    });
  

      
  
    test('should log each key-value pair to the console', () => {
      expect(consoleLogSpy).toHaveBeenCalledTimes(testData.length);

    });

    test.each(testData)('should log the key-value pair to the console', (data) => {
      expect(consoleLogSpy).toHaveBeenNthCalledWith(data.key, data.value)
    })

    test('should iterate and match key and values', () => {
      for (let i = 1; i < testData.length; i ++) { 
        
        expect(testData[i].key).toBe(i + 1);
        expect(consoleLogSpy).toHaveBeenNthCalledWith(testData[i].key, testData[i].value);  
       
      }
        
    });





});


