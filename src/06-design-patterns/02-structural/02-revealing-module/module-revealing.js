// Reaving module pattern
// The revealing module pattern is an extension of the module pattern. 
// It is a way to reveal the private methods and variables of a module. 
// It is a way to encapsulate private and public methods and variables, 
// but it is more flexible than the module pattern.

const RevealingModule = (function() {
 let privateVar = 'I am public';

 /**
  * Private method that logs the value of privateVar.
  */
 function privateMethod() {
  console.log(privateVar);
 }

 function publicMethod() {
  privateMethod();
 }

 return {
  publicMethod: publicMethod
 };
})();

RevealingModule.publicMethod(); // I am private
module.exports = RevealingModule;