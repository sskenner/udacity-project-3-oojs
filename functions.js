// functions ///////////////////////////////////////////

// JS function def
// defined with the function keyword
// function declaration or expression
// as a declaration
function functionName(parameter) {
  // code to be executed
}
// as an expression (anonymous function)
var x = function(a, b) {return a*b};

// function() constructor
var myFunction = new Function("a", "b", "return a*b");
var x = myFunction(4, 3);
// or
var myFunction = function(a, b){return a*b};
var x = myFunction(4, 3);

// due to hoisting, functions can be called b4 they are declared (false for functions defined using an expression)

// (anonymous) self-invoking functions
(function() {
  var x = "hello";
})();

// used as values


// http://www.w3schools.com/js/js_function_definition.asp

// function myFunction() {
//   return "Hello World";
// }
// document.getElementById("demo").innerHTML = myFunction();

// functions as var's
// var text = "the temp is " + toCelcius(32) + " Centigrade";

// convert fahrenheit to celcius
// function toCelcius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }
// document.getElementById("demo").innerHTML = toCelcius(32);

// the () operator invokes the function
// accessing a function w/o () will return the function definition


// function myFunction(a, b) {
//   return a*b
// }

// var x = myFunction(4, 3);

// function name(parameter1, parameter2, parameter3) {
//   // code to be executed
// }

// function myFunction(p1, p2) {
//   return p1*p2;
// }

// http://www.w3schools.com/js/js_functions.asp
