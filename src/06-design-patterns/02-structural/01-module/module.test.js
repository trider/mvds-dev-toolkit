const Module = require('./module');
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

describe('Module', () => {


  test('should log the value of privateVar', () => {
    const spy = jest.spyOn(console, 'log');
    Module.publicMethod();
    expect(spy).toHaveBeenCalledWith('I am private');
  });

});