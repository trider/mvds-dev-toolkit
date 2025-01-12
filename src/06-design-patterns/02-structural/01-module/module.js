/**
 * Module Pattern
 * Encapsulates private and public methods and variables.
 * The Module pattern is based in part on object literals and so it 
 * makes sense to refresh our knowledge of them first.
 */

const Module = (function() {
 let privateVar = 'I am private';
 
 function privateMethod() {
     console.log(privateVar);
 }
 
 return {
     publicMethod: function() {
         privateMethod();
     }
 };
})();

Module.publicMethod(); // I am private
module.exports = Module;