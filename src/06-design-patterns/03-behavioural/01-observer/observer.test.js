const Subject = require('./observer');
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;


describe('Subject', () => {
 test('should notify all subscribed observers with the provided data', () => {
   const subject = new Subject();
   const observer1 = jest.fn();
   const observer2 = jest.fn();

   subject.subscribe(observer1);
   subject.subscribe(observer2);

   subject.notify('Hello Observers!');

   expect(observer1).toHaveBeenCalledWith('Hello Observers!');
   expect(observer2).toHaveBeenCalledWith('Hello Observers!');
 });


});

