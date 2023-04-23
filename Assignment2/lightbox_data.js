"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Image List

      Filename:lightbox_data.js
      
      Student Name: Maha Nasir
      Student Number: 301266305
      COMP125 - Assignment 2
      link: http://studentweb.cencol.ca/mnasir11/comp125/Assignment2/index.html
*/


// Title of the slideshow
let lightboxTitle = "My Ragdoll Cats Gallery";

// Names of the image files shown in the slideshow
let imgFiles = ["photo01.jpg", "photo02.jpg", "photo03.jpg", "photo04.jpg",
                "photo05.jpg", "photo06.jpg", "photo07.jpg", "photo08.jpg",
                "photo09.jpg", "photo10.jpg", "photo11.jpg", "photo12.jpg"]

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="Simba: The cute one";
imgCaptions[1]="Lily: The angry one"; 
imgCaptions[2]="Momo: Fun loving"; 
imgCaptions[3]="Jessy: Most sensitive one"; 
imgCaptions[4]="Pinqo: Only two years old!";
imgCaptions[5]="Elis: Most beautifull in the family!";
imgCaptions[6]="Safu: The naughty one";
imgCaptions[7]="Khukhu: One with the most difficult name ";
imgCaptions[8]="Sugar: Most innocent";
imgCaptions[9]="Mani-Cute: Cute just like her name!";
imgCaptions[10]="Pinki: The fastest one!";
imgCaptions[11]="Happy: Always happy like her name!";

// Count of images in the slideshow
let imgCount = imgFiles.length;
