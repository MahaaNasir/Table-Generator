"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Application to generate a slide show
      Author: 
      Date:   

      Filename: js05.js
      
      Student Name: Maha Nasir
      Student Number: 301266305
      COMP125 - Assignment 2
      link: http://studentweb.cencol.ca/mnasir11/comp125/Assignment2/index.html
*/

window.addEventListener("load", mainPage);

function createLightbox() {
   // Lightbox Container
   let lightBox = document.getElementById("lightbox");

   // Parts of the lightbox
   let lbTitle = document.createElement("h1");
   let lbCounter = document.createElement("div");
   let lbPrev = document.createElement("div");
   let lbNext = document.createElement("div");
   let lbPlay = document.createElement("div");
   let lbImages = document.createElement("div");


   // Design the lightbox title
   lightBox.appendChild(lbTitle);
   lbTitle.id = "lbTitle";
   lbTitle.textContent = lightboxTitle;

   // Design the lightbox slide counter
   lightBox.appendChild(lbCounter);
   lbCounter.id = "lbCounter"; 
   let currentImg = 1;
   lbCounter.textContent = currentImg + " / " + imgCount;

   // Design the lightbox previous slide button
   lightBox.appendChild(lbPrev);
   lbPrev.id = "lbPrev"; 
   lbPrev.innerHTML = "&#9664;";
   lbPrev.onclick = showPrev;

   // Design the lightbox next slide button
   lightBox.appendChild(lbNext);
   lbNext.id = "lbNext";
   lbNext.innerHTML = "&#9654;";
   lbNext.onclick = showNext;

   // Design the lightbox Play-Pause button
   lightBox.appendChild(lbPlay);
   lbPlay.id = "lbPlay"; 
   lbPlay.innerHTML = "&#9199;";
   let timeID;

   // Change color when active
   var lbPlayActive = document.querySelector('div#lightbox div#lbPlay');
   lbPlayActive.addEventListener('click', function() {
      lbPlayActive.classList.toggle('active');
   });

   lbPlay.onclick = function(){
      if(timeID !== undefined){
         // Stop the slideshow
         clearInterval(timeID);
         timeID = undefined;
      }else{
         // Start the slideshow
         showNext();
         timeID = setInterval(showNext, 1500);
      }
   }
   
   
   // Design the lightbox images container
   lightBox.appendChild(lbImages);
   lbImages.id = "lbImages";
   // Add images from the imgFiles array to the container
   for (let i = 0; i < imgCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];  
      image.onclick = LargeImage;
      lbImages.appendChild(image);
   }

   function showNext(){
      lbImages.appendChild(lbImages.firstElementChild);
      (currentImg < imgCount) ? currentImg++ : currentImg = 1;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }

   function showPrev(){
      lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
      (currentImg > 1) ? currentImg-- : currentImg = imgCount;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }

   /************************************************************************** */
   /* No use, as we are opening another window                                 */
   /************************************************************************** */
   function createOverlay(){
      let overlay = document.createElement("div");
      overlay.id = "lbOverlay";

      // Add the figure box to the overlay
      let figureBox = document.createElement('figure');
      overlay.appendChild(figureBox);

      // Add the image to the figure box.
      let overlayImage = this.cloneNode("true");
      figureBox.appendChild(overlayImage);

      // Add the caption to the figure box.
      let overlayCaption = document.createElement('figcaption');
      overlayCaption.textContent = this.alt;
      figureBox.appendChild(overlayCaption);

      // Add a close button to the overlay
      let closeBox = document.createElement('div');
      closeBox.id = "lbOverlayClose"
      closeBox.innerHTML = "&times;";

      closeBox.onclick = function(){
         document.body.removeChild(overlay);
      }
      overlay.appendChild(closeBox);
   }

   //BONUS: Make a function to open image in a new window
   function LargeImage(event) {
      var centerImage = event.target;
      var popUpWindow = window.open("openImage.html?imageIndex=" + centerImage.src, "zoomwin", "width=870,height=830");
      popUpWindow.focus();
   }

}

//Rubric: Function to remove favorites 
//Rubric: Function uses nodes DOM (createElement and appendChild)
function RemoveFavorites(){
   const maxFavImages = 5;
   const favImages = document.querySelector('.favorites');
   const addedImages = new Set();
   const favCount = document.querySelector('#fav-count');
   favCount.textContent = `( 0 of ${maxFavImages} )`;


   window.addEventListener('message', event => {
     const src = event.data;
     //alert if the image is already added to favorites
     if (addedImages.has(src)) {
       alert('This image is already added to favorites!');
       return;
     }
     //Rubric: Show a Remove button when the user clicks a fav picture
     const div = document.createElement('div');
     div.innerHTML = `
       <img src="${src}" width="170" height="125">
       <p> <button id="removeBtn" type="button">Remove</button> </p>
      `;
       
     favImages.appendChild(div);
     addedImages.add(src);
   
     if (favImages.children.length > 0) {
       favCount.textContent = `( ${favImages.children.length-1} of ${maxFavImages} )`;
      } else {
       favCount.textContent = '';
      }
   
     div.querySelector('button').addEventListener('click', () => {
       addedImages.delete(src);
       favImages.removeChild(div);
   
      if (favImages.children.length > 0) {
         favCount.textContent = `( ${favImages.children.length-1} of ${maxFavImages} )`;
      } else {
         favCount.textContent = '';
      }
     });
   });
}


//making everything visible
function mainPage() {
   createLightbox();
   RemoveFavorites();
 }