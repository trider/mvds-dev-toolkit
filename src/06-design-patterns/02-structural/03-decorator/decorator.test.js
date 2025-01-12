const Vehicle = require('./decorator');
const Car = require('./decorator');
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;


describe('Vehicle', () => {

  const vehicle = new Vehicle();
  const myCar = new Car(Vehicle(''));
  const consoleLogSpy = jest.spyOn(console, 'log');


  test('should create a new instance of Vehicle', () => {
    expect(vehicle).toBeDefined();
  })


  test('should create a new instance of Car', () => {
    expect(myCar).toBeDefined();
  });

  test('should return the car description', () => {
    console.log(myCar.getDescription());
    expect(myCar.getDescription()).toContain('This is a');

  });



});
