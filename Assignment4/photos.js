/*    JavaScript - Assignment 4

 *    Photo gallery
 *    Author: Julio Vinicius A. de Carvalho
 *    Date: April 1st, 2023

 *    Filename: photos.js

      Student Name: Maha Nasir
      Student Number: 301266305

      link: http://studentweb.cencol.ca/mnasir11/comp125/Assignment4
 */

"use strict"; // interpret document contents in JavaScript strict mode

//1. Display the pictures that are specified in a JSON file
//1.a Create the requests with XMLHttpRequest
const xhr = new XMLHttpRequest()

//1.b The JSON file is loaded from the response of the proxy.php
xhr.open("GET", "https://comp125-a4-template.onrender.com/imagelist");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

xhr.onreadystatechange = function() {
   if (this.readyState === 4 && this.status === 200) {
      const getResponse = JSON.parse(this.responseText);
      const allImages = getResponse.ImageList;
      const getImage = document.getElementById("image");
      const imgName = document.getElementById("imgName");
      let index = 0;

      //2. Rotate pictures automaticall
      function autoRotate() {
         const ongoingImage = allImages[index];
         const showImage = ongoingImage.name;
         const imageName = showImage.split("/").pop();
         getImage.src = showImage;
         imgName.innerText = imageName;
         index = (index + 1) % allImages.length;
         //2.a Intervals based on the attribute time to show each picture
         //2.b Implement infinity rotation
         setTimeout(autoRotate, ongoingImage.time);
      }
      autoRotate();

      //3. Rotate allImages manually
      const leftClick = document.getElementById("leftarrow");
      const rightClick = document.getElementById("rightarrow");

      leftClick.addEventListener("click", () => {     
         const ongoingImage = allImages[index];
         const showImage = ongoingImage.name;
         const imageName = showImage.split("/").pop();
         getImage.src = showImage;
         imgName.innerText = imageName;
         index = (index + allImages.length - 1) % allImages.length;
      })

      rightClick.addEventListener("click", () => {
         const ongoingImage = allImages[index];
         const showImage = ongoingImage.name;
         const imageName = showImage.split("/").pop();
         getImage.src = showImage;
         imgName.innerText = imageName;
         index = (index + 1) % allImages.length;
      })

      //4. Update button to reload and update the picture list from the JSON file
      reloadButton.addEventListener("click", () => {
         index = 0;
         autoRotate();
      });     
   }
};


Math.max([4, 3, 5, 9, 2])


