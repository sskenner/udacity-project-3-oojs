// the parameter this

var fn = function(one, two) {
  log(this, one, two); // parameter this
};
var r = {r}, g = {g}, b = {b}; // {} = objects

f(g,b); // ..bound to? global obj (when there is no
//dot to help pass a specific binding for the keyword
//this)

///////////////
// this as a parameter of a method invocation
var fn = function(one, two) {
  log(this, one, two);
};
var r = {r}, g = {g}, b = {b}; // {} = objects
r.method = fn;
r.method(g,b);  // ..logged? {r}, {g}, {b}

// obj left of the dot to find a focal object during
//method invocation .. same as:
r['method'](g,b); // bracket notation i.e. use brackets
//instead of dots to get access to the method

///////////////
var fn = function(one, two) {
  log(one, two);
};
var r = {r}, g = {g}, b = {b}; // {} = objects

fn(g, b); // what will be logged? {g}, {b}

// closures
// var sagas = [];
// var hero = aHero();
// var newSaga = function() {
//   var foil = aFoil();
//   sagas.push
//   var saga = function() {
//     var deed = aDeed();
//     console.log(hero+deed+foil);
//   }
//   saga();
//   saga();
// };
// newSaga();
// newSaga();


// // saga.js
// // --
// var hero = aHero();
// var newSaga = function() {
//   var foil = aFoil();
//   var saga = function() {
//     var deed = aDeed();
//     console.log(hero+deed+foil);
//   }
//   saga();
//   saga();
// };
// newSaga();
// newSaga();

// function aHero() {
//   return "a hero-";
// }

// function aFoil() {
//   return ("a foil-");
// }

// function aDeed() {
//   return ("a deed-");
// }

// // --
// http://pierrespring.com/2010/05/11/function-scope-and-lexical-scoping/
// var text = 'Look at me';

// var parent_function = function () {

//   var inner_function = function () {
//     var scream = '!!!';
//     console.log(text + ', ' + reason + scream);
//   }

//   var reason = "I'm an attention whore";
//   var scream = '!';

//   console.log(text + scream);
//   inner_function();
// };

// parent_function();

// // --
// var hero = aHero();
// var newSaga = function() {
//   var foil = aFoil();

// };
// log foil();

// //log(hero);
// // other.js
