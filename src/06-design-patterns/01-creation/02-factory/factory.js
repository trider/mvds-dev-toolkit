// Description: Factory pattern example.
// The factory pattern is a creational design pattern that provides a way to create objects without specifying the exact class of object that will be created. 
// This pattern uses factory methods to create objects. A factory method is a method that creates objects of a class. In this example, 
// we have a Car class that represents a car. We also have a createCar function that creates a new car instance. 
//The createCar function is a factory method that creates car objects.

/**
 * Represents a car.
 * @constructor
 * @param {string} make - The make of the car.
 * @param {string} model - The model of the car.
 * @param {number} year - The year of the car.
 */
function Car(make, model, year) {
 this.make = make;
 this.model = model;
 this.year = year;
}

/**
 * Creates a new car instance.
 * @param {string} make - The make of the car.
 * @param {string} model - The model of the car.
 * @param {number} year - The year of the car.
 * @returns {Car} The newly created car instance.
 */
function createCar(make, model, year) {
 return new Car(make, model, year);
}

// Usage example
const myCar = createCar('Toyota', 'Camry', 2022);
console.log(myCar); // Output: Car { make: 'Toyota', model: 'Camry', year: 2022 }

module.exports = Car; // Do not remove. This allows the class and function to be imported by other modules 