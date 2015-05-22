var gold = {a:1};
log(gold.a);
log(gold.z);

var blue = extend({}, gold);
blue.b = 2;
log(blue.a);
log(blue.b);
log(blue.z);

var rose = Object.create(gold);
rose.b = 2;
log(rose.a);
log(rose.b);
log(rose.z);



// NOTES
//   vocab .. lk
//     lexical scope
//     execution contexts or in memory scopes
//      closures
//      this: the object found to the left of the call time
//        dot where the containing function is called
//      focal object

// examples //////////////////////////////////////////////////

// prototype chains ///////////////////////////////////

// var fn = function(one, two) {
//   log(this, one, two);
// };
// var r={}, g={}, b={}; y={};
// r.method = fn;
// r.method(g,b); or r['method'](g,b) //this refers to r
// fn(g,b);
// fn.call(r,g,b);
// r.method.call(y,g,b);
// setTimeout(fn, 1000);
// setTimeout(r.method, 1000);

// var setTimeout = function(cb, ms) {
//   waitSomehow(ms);
//   cb();
// };

//'this' keyword
///////////////////////////////////
// var obj = {
//   fn = function(a,b) {
//     log(this);
//   };
// }

// var ob2 = {method:obj.fn};

// obj.fn(3,4);

// scopes and closures .. remember interpreter diagram
///////////////////////////////////
// var sagas = [];
// var hero = aHero();
// var newSaga = function() {
//   var foil = aFoil();
//   sagas.push (function() {
//     var deed = aDeed();
//     log(hero+deed+foil);
//   });
// };
// newSaga();
// sagas[0]();
// sagas[0]();
// newSaga();
// sagas[0]();
// sagas[1]();
// sagas[0]();
