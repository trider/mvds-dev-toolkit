const Car = require('./factory');
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

describe('Car', () => {
  test('should create a new instance of Car', () => {
    const car = new Car('Toyota', 'Camry', 2022);
    expect(car).toEqual({ make: 'Toyota', model: 'Camry', year: 2022 });
  });


});


describe ('createCar', () => {
 test('should create a new instance of Car using createCar factory method', () => {
  function createCar(make, model, year) {
   return new Car(make, model, year);
  }

  const myCar = createCar('Toyota', 'Camry', 2022);
  expect(myCar).toEqual({ make: 'Toyota', model: 'Camry', year: 2022 });
 })

});