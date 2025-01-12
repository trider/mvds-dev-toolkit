const Singleton = require('./singleton');
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;


describe('Singleton', () => {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

 
 test('should instance1 to exist', () => {
   expect(instance1).toBeDefined();
 });

 test('should instance2 to exist', () => {
  expect(instance2).toBeDefined(); 
});

 
 test('should return the same instance of Singleton', () => {
    expect(instance1 === instance2).toBe(true);
  });
});