// This is NOT something we are familiar with by now, but needed to make it a bit more functional 

// setup variables for things that are used more than once
let headerElem = document.querySelector('header');
let menuElem = document.querySelector('#menu');
const strActive = 'opened';

// Add class "opened" to <header> when #menu is clicked
menuElem.addEventListener('click', function(event){
	event.preventDefault(); // stops the element from doing its usual stuff

  if (headerElem.className.indexOf('opened') === -1) {
    // if the header element HAS the class 'opened' this code will be read

    headerElem.classList.add(strActive); // add the content of strActive to the class attribute on <header>
    menuElem.innerHTML = 'CLOSE'; // change the text inside the button
    
  } else {
    // if the header element DOESN'T have the class 'opened' this code will be read

    headerElem.classList.remove(strActive); // add the content of strActive to the class attribute on <header>
    menuElem.innerHTML = 'MENU'; // change the text inside the button
  }
});