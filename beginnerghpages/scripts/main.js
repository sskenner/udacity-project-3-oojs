var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === "images/keepcalmcryptoon.png") {
    myImage.setAttribute('src', "images/firefox-icon.png");
  } else {
    myImage.setAttribute('src', "images/keepcalmcryptoon.png");
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('please enter ur name');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'mozilla is da-ish, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

// var myHeading = document.querySelector('h1');
// myHeading.innerHTML = 'Hello world!';
