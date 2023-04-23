"use strict";
/*    
Student Name: Maha Nasir
Student Number: 301266305
COMP125 - Assignment 2
link: http://studentweb.cencol.ca/mnasir11/comp125/Assignment2/index.html
*/

var imageIndex = new URLSearchParams(window.location.search).get("imageIndex");

/* getting the image */
function getImage() {
  document.getElementById("fillSize").src = imageIndex; 
  addEventListener();
}
  
/* close window btn function */
function closeWindow() {
  window.close();
}

/* Rubric: Function to add the pic to the favorite list*/
/* add to favorites btn function */
function addToFavorites() {
  const maxFavImages = 5;
  const favImages = window.opener.document.querySelector('.favorites');
  const addedImages = new Set(favImages.querySelectorAll('img[src]'));
 
  //Rubric: Allow only 5 pics to be added to favorite list
  // alert when maximum limit has reached
  if (addedImages.size >= maxFavImages) {
  //Rubric: Show a message about the limit of the list
    alert('Maximum limit of favorite images is 5!');
    return;
  }   
  window.opener.postMessage(imageIndex, '*'); 

  // Change button text on click
  const btn = document.getElementById("addFavoriteImage");
  btn.textContent = "Added to favorites"; 
}

/* create event listener for close button and add to favorites */
function addEventListener() {
  // close window button
  var closeWindowBtn = document.getElementById("closeWindow");
  closeWindowBtn.addEventListener("click", closeWindow);

  // add to favorites button
  var addToFavsBtn = document.getElementById("addFavoriteImage");
  addToFavsBtn.addEventListener("click", addToFavorites);
}

// Load page and add image
window.onload = getImage;
