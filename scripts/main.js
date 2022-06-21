 /*Ali Sbeih*/

//querySelector() grabs a reference to the heading 
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/websiteone.jpg') {
      myImage.setAttribute('src','images/websitetwo.jpg');
    } else {
      myImage.setAttribute('src','images/websiteone.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Cool Wallpapers, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Cool Wallpapers, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  