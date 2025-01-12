/**
 * Observer Pattern
 * The observer pattern is a software design pattern in which an object, called the subject,
 * maintains a list of its dependents, called observers,
 * and notifies them of a state change, usually by calling one of their methods.
 */

/**
 * Represents a subject that maintains a list of observers and notifies them of state changes.
 * @constructor
 */
function Subject() {
 this.observers = [];
}

Subject.prototype = {
 /**
  * Subscribes an observer function to the subject.
  * @param {Function} fn - The observer function to subscribe.
  */
 subscribe: function (fn) {
  this.observers.push(fn);
 },

 /**
  * Unsubscribes an observer function from the subject.
  * @param {Function} fnToRemove - The observer function to unsubscribe.
  */
 unsubscribe: function (fnToRemove) {
  this.observers = this.observers.filter((fn) => fn !== fnToRemove);
 },

 /**
  * Notifies all subscribed observers with the provided data.
  * @param {*} data - The data to be passed to the observers.
  */
 notify: function (data) {
  this.observers.forEach((fn) => fn(data));
 },
};

const subject = new Subject();

/**
 * Observer function that logs the provided data.
 * @param {*} data - The data to be logged.
 */
function Observer1(data) {
 console.log(`Observer 1: ${data}`);
}

/**
 * Observer function that logs the provided data.
 * @param {*} data - The data to be logged.
 */
function Observer2(data) {
 console.log(`Observer 2: ${data}`);
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);

subject.notify('Hello Observers!');
// Observer 1: Hello Observers!
// Observer 2: Hello Observers!

module.exports = Subject, Observer1, Observer2;