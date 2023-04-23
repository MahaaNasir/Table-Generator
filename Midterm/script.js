/* 
    JavaScript 6h Edition
    Midterm 1

    Functions
    Author: Audrey Bernier Larose
    Date: 2-25-2021

    Filename: script.js
    
    Student Name: Maha Nasir
    Student Number: 301266305
    COMP125 - MIDTERM
    link: http://studentweb.cencol.ca/mnasir11/comp125/Midterm/index.html
 
*/
"use strict"
    const biFirstName = document.getElementById("bFirstName");
    const biLastName = document.getElementById("bLastName");
    const biStreetAddress = document.getElementById("bStreetAddress");
    const biPhoneNumber = document.getElementById("bPhoneNumber");
    const biYear = document.getElementById("bYear");
    const biGender = document.getElementById("bGender");

    const shFirstName = document.getElementById("sFirstName");
    const shLastName = document.getElementById("sLastName");
    const shStreetAddress = document.getElementById("sStreetAddress");
    const shPhoneNumber = document.getElementById("sPhoneNumber");
    const shYear = document.getElementById("sYear");
    const shGender = document.getElementById("sGender");

   
/* removing default values for gender and year select lists */
function removeSelectDefaults() 
{
    // ADD YOUR CODE IN HERE
    document.getElementById("bYear").selectedIndex = "-1";
    document.getElementById("bGender").selectedIndex = "-1";
    document.getElementById("sYear").selectedIndex = "-1";
    document.getElementById("sGender").selectedIndex = "-1";
}

/* Copying values from billing to shipping fields */
function copyBillingAddress() 
{
    // ADD YOUR CODE IN HERE
    const copyFirstName = document.getElementById("bFirstName").value;
    const copyLastName = document.getElementById("bLastName").value;
    const copyStreetAddress = document.getElementById("bStreetAddress").value;
    const copyPhoneNumber = document.getElementById("bPhoneNumber").value;
    const copyYear = document.getElementById("bYear").value;
    const copyGender = document.getElementById("bGender").value;
    const checkbox = document.getElementById("sameAddr");
    if (checkbox.checked) {
        // Copy information if the checkbox is checked
        document.getElementById("sFirstName").value = copyFirstName;
        document.getElementById("sLastName").value = copyLastName;
        document.getElementById("sStreetAddress").value = copyStreetAddress;
        document.getElementById("sPhoneNumber").value = copyPhoneNumber;
        document.getElementById("sYear").value = copyYear;
        document.getElementById("sGender").value = copyGender;
    } else {
        // Empty if the checkbox is not checked
        document.getElementById("sFirstName").value = "";
        document.getElementById("sLastName").value = "";
        document.getElementById("sStreetAddress").value = "";
        document.getElementById("sPhoneNumber").value = "";
        document.getElementById("sYear").value = "";
        document.getElementById("sGender").value = "";
    }
}
/* Validates addresses fieldsets */
function validateAddresses(fieldsetId) {
        // ADD YOUR CODE IN HERE
    let getFieldset = document.getElementById(fieldsetId);
    let addressInput = getFieldset.querySelector('label[for$="streetAddress"]+input');
    if (addressInput.validity.valueMissing) {
      addressInput.setCustomValidity("Enter your address");
    } else {
      addressInput.setCustomValidity("");
    }
}
/***************Adding more validate finctions for other fields**********************/

function validateFirstName() {
    var namePattern = /^[a-zA-Z]+$/;
    //for billing
    if (biFirstName.validity.valueMissing) {
        biFirstName.setCustomValidity("Enter your first name");
    }
    else if (!namePattern.test(biFirstName.value)) {
        biFirstName.setCustomValidity("First name can only contain letters");
    } else {
        biFirstName.setCustomValidity("");
    }

    //for shipping
    if (shFirstName.validity.valueMissing) {
        shFirstName.setCustomValidity("Enter your first name");
    }
    else if (!namePattern.test(shFirstName.value)) {
        shFirstName.setCustomValidity("First name can only contain letters");
    } else {
        shFirstName.setCustomValidity("");
    }
}

function validateLastName() {
    var namePattern = /^[a-zA-Z]+$/;
    //for billing
    if (biLastName.validity.valueMissing) {
        biLastName.setCustomValidity("Enter your last name");
    }
    else if (!namePattern.test(biLastName.value)) {
        biLastName.setCustomValidity("Last name can only contain letters");
    } else {
        biLastName.setCustomValidity("");
    }
    //for shipping
    if (shLastName.validity.valueMissing) {
        shLastName.setCustomValidity("Enter your last name");
    }else if (!namePattern.test(shLastName.value)) {
        shLastName.setCustomValidity("Last name can only contain letters");
    } else {
        shLastName.setCustomValidity("");
    }
}

function validateGender() {
    //for billing
    if (biGender.selectedIndex === -1) {
     biGender.setCustomValidity("Select gender");
    } else {
     biGender.setCustomValidity("");
    }

    //for shipping
    if (shGender.selectedIndex === -1) {
     shGender.setCustomValidity("Select gender");
    } else {
     shGender.setCustomValidity("");
    }
} 

function validatePhone() {
    var phonePattern = /^[0-9+]+$/;

    //for billing
    if (biPhoneNumber.validity.valueMissing) {
        biPhoneNumber.setCustomValidity("Enter your phone number");
    }else if (!phonePattern.test(biPhoneNumber.value)) {
        biPhoneNumber.setCustomValidity("Phone number can only contain numbers");
    }
    else {
        biPhoneNumber.setCustomValidity("");
    }
    //for shipping
    if (shPhoneNumber.validity.valueMissing) {
        shPhoneNumber.setCustomValidity("Enter your phone number");
    }else if (!phonePattern.test(shPhoneNumber.value)) {
        shPhoneNumber.setCustomValidity("Phone number can only contain numbers");
    } else {
        shPhoneNumber.setCustomValidity("");
    }
}
function validateYear() {
    //for billing
    if (biYear.selectedIndex === -1) {
        biYear.setCustomValidity("Select year");
    } else {
        biYear.setCustomValidity("");
    }
     //for shipping
    if (shYear.selectedIndex === -1) {
        shYear.setCustomValidity("Select year");
    } else {
        shYear.setCustomValidity("");
    }
}

/* Validating form */
function validateForm()
{   validateAddresses("billingAddress");
    validateAddresses("shippingAddress");    

    //adding other validations 
    validateLastName();
    validateFirstName();
    validateGender();
    validatePhone();
    validateYear();

    if(document.getElementsByTagName("form")[0].checkValidity())
    {
        document.getElementById("errorMessage").style.display = "none";
    } else{
        document.getElementById("errorMessage").style.display = "block";
    }  
}


/*Adding placeholder to the fields with the help of js*/
function addingPlaceholder(){
    /* Placeholder values */
    biFirstName.placeholder = "First Name";
    shFirstName.placeholder = "First Name";
    biLastName.placeholder = "Last Name";
    shLastName.placeholder = "Last Name";
    biStreetAddress.placeholder = "Street address";
    shStreetAddress.placeholder = "Street address";
    biPhoneNumber.placeholder = "Phone number";
    shPhoneNumber.placeholder = "Phone number";
}

/* Resets the page */
function resetPage()
{
    location.reload();
}

/* Adds event listeners */
function createEventListeners()
{       
 
    document.getElementById("submitBtn").addEventListener("click", validateForm);
  
    document.getElementById("sameAddr").addEventListener("click", copyBillingAddress);

    document.getElementById("resetBtn").addEventListener("click", resetPage);   

}

/* Runs initial form configuration functions */
function setUpPage()
{ 
    removeSelectDefaults();
    createEventListeners();

    //Adding function for placeholder
    addingPlaceholder();
}

 /* Runs setup function when page finishes loading */
window.addEventListener("load", setUpPage)
