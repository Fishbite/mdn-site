/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

/* create an alert box when webpage is clicked

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

// change the top image when clicked
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img1.jpg') {
      myImage.setAttribute ('src','images/img2.jpg');
    } else {
      myImage.setAttribute ('src','images/img1.jpg');
    }
}

// setup variables referencing the <button> & <h1>
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

// create a personalised welcome message to the site
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName + '!';
  }
  
  /* run the intitialisation code to check whether 'name' data exists
  if not, run the function setUserName() to create it */
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName + '!';
  }

  // an event handler on button to allow user to change the name
  myButton.onclick = function() {
    setUserName();
  }