functfunc// for /////////////////////////////////////////////////
// syntax
for([initialization]; [condition]; [final-expression])
  // statement

for(var i=0; i<9; i++) {
  console.log(i);
  // more statements
}

// initialization block not required to initialize var's
var i=0;
for(; i<9; i++) {
  console.log(i);
  // more statements
}

// condition block is also optional
for(var i=0;; i++) {
  console.log(i);
  if(i>3) break;
  // more statements
}

// omit all 3 blocks
var i=0;

for(;;) {
  if(i>3) break;
  console.log(i);
  i++;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

// while ////////////////////////////////////////////
// syntax
while (condition) {
  // statement
}

var n=0;
var x=0;

while(n<3) {
  n++;
  x+=n;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
