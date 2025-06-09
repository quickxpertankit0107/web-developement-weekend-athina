// step 1
// Get inputs for name and email
const userName = prompt("Enter your name:");
const userEmail = prompt("Enter your email:");

// ----------------------------------------------------------------------------------------
// step2
// creating variable to throw error and calling function with inputs
const validateName = function(name) {
  // Validation name
  // single parameter with name
  if (!name) {
    return "Name is required";
  }

  else if (name.length < 5) {
    return "Name must be at least 2 characters";
  }

  else {
    return "";
  }
};

const validateEmail = function(email) {
  // Validation email
  // single parameter with email
  if (!email || !email.includes("@") || !email.includes(".")) {
    return "Email is invalid";
  }

  else {
    return "";
  }
}; 

// try calling at top in step 1 after userEmail u will get error
const nameError = validateName(userName);
const emailError = validateEmail(userEmail);

// ----------------------------------------------------------------------------------------

// step 3
// show result
if (nameError || emailError) {
  alert(`${nameError}\n${emailError}`); // template literal
} else {
  alert("Validation passed");
}