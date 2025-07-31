// step 1
// Get inputs for name and email
const userName = prompt("Enter your name:");
const userEmail = prompt("Enter your email:");

// creating variable to throw error and calling function with inputs
const nameError = validateName(userName); // username means passing from prompt
const emailError = validateEmail(userEmail); // userEmail means passing from prompt

// ----------------------------------------------------------------------------------------

// step 2
// Validation name
// single parameter with name
function validateName(name) {
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
function validateEmail(email) {
  if (!email || !email.includes("@") || !email.includes(".")) {
    return "Email is invalid";
  }

  else{
    return "";
  }
}

// ----------------------------------------------------------------------------------------

// step 3
// show result
if (nameError || emailError) {
  alert(`${nameError}\n${emailError}`); // template literal
} else {
  alert("Validation passed");
}