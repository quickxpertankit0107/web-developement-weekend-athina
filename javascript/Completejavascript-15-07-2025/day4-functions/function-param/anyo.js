// step 1
// Get inputs for name and email
const userName = prompt("Enter your name:");
const userEmail = prompt("Enter your email:");
const contactNo = (prompt("enter you number"))

// creating variable to throw error and calling function with inputs


// ----------------------------------------------------------------------------------------

// step 2
// Validation name
// single parameter with name
var validateName = function (name) {
  if (!name) {
    return "Name is required";
  }

  else if (name.length < 5) {
    return "Name must be at least 2 characters";
  }

  else{
    return "";
  }
}

// Validation email
// single parameter with email
var validateEmail= function (email) {
  if (!email || !email.includes("@") || !email.includes(".")) {
    return "Email is invalid";
  }

  else{
    return "";
  }
}


var validateNumb = function(numb){
  if (!numb) {
    return "number cant be empty";
  } else if (isNaN(numb)) {
    return "only digits allowed";
  } else if (numb.length !== 10) {
    return "numbers must be 10 digits";
  } else {
    return "";
  }
};


const nameError = validateName(userName); // username means passing from prompt
const emailError = validateEmail(userEmail); // userEmail means passing from prompt
const numbError = validateNumb(contactNo); // contactNo means passing from prompt
// ----------------------------------------------------------------------------------------

// step 3
// show result
if (nameError || emailError || numbError) {
  alert(`${nameError}\n${emailError}\n${numbError}`); // template literal
} else {
  alert("Validation passed");
}