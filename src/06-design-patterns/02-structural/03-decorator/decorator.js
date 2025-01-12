/**
 * @fileoverview Implements the decorator pattern.
 * The decorator pattern is a structural design pattern that allows adding new behaviors to objects dynamically by placing them inside special wrapper objects called decorators.
 */

/**
 * Represents a vehicle.
 * @constructor
 * @param {string} type - The type of the vehicle.
 */
function Vehicle(type) {
 this.type = type;
}

/**
 * Get the description of the vehicle.
 * @returns {string} The description of the vehicle.
 */
Vehicle.prototype.getDescription = function() {
 return `This is a ${this.type}`;
};

/**
 * Represents a car.
 * @constructor
 * @param {Vehicle} vehicle - The vehicle to decorate.
 */
function Car(vehicle) {
 this.vehicle = vehicle;
 this.vehicle.type = 'Car';
}

Car.prototype = Object.create(Vehicle.prototype);

/**
 * Get the description of the car.
 * @returns {string} The description of the car.
 */
Car.prototype.getDescription = function() {
 return `${this.vehicle.getDescription()} with four wheels`;
};

const myCar = new Car(new Vehicle(''));
console.log(myCar.getDescription()); // This is a Car with four wheels

module.exports = Vehicle,Car;
