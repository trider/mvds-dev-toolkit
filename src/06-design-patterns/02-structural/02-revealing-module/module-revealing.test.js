const RevealingModule = require('./module-revealing');
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

describe('RevealingModule', () => {


  test('should log the value of public metho', () => {
    const spy = jest.spyOn(console, 'log');
    RevealingModule.publicMethod();
    expect(spy).toHaveBeenCalledWith('I am public');
  });

});