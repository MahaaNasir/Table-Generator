// Function to get the table
function getTable() {
  var drawTable = document.createElement("table");

  //Getting values for rows and columns from user
  var rows = document.getElementById("rows").value;
  var columns = document.getElementById("columns").value;

  //Creates and prints the rows and columns using for-loop
  for (var r = 1; r <= rows; r++) {
    var numRowS = document.createElement("tr");
    for (var c = 1; c <= columns; c++) {
      var numCell = document.createElement("td");
      numCell.innerHTML = r + " , " + c;
      numRowS.appendChild(numCell);
    }
    drawTable.appendChild(numRowS);
  }
  //Print a single table
  tableContent.innerHTML = "";    
  tableContent.appendChild(drawTable); 
    

//Starts to get cells highlighted using for-loop
  var getTdElement = document.getElementsByTagName("td");
  var size = getTdElement.length;
  for (var i = 0; i <size; i++) {

    // Adds the highlight when mouseover
    getTdElement[i].addEventListener("mouseover", function() {
      this.classList.add("zoomCell");   
      this.classList.add("highlightCell");
    });

    //Removes the highlight when mouseout
    getTdElement[i].addEventListener("mouseout", function() {
      this.classList.remove("zoomCell"); 
      this.classList.remove("highlightCell");
    });
  }   
}
  
