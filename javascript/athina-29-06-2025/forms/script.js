function validateForm()
{
    let isValid = true;

    // Name Validation
    const name = document.getElementById('name').value;
    if (name === '' || name === null) {
        document.getElementById('name_error').textContent = 'Name is required';
        isValid = false;
    } 
    //character only
    //regex-->regular expression !-->not in

    else if(!/^[A-Za-z\s]+$/.test(name)){
        document.getElementById('name_error').textContent = 'Name contain only letters';
        isValid = false;
    }
    
    // // name with number
    // else if (!/[a-zA-Z]/.test(name) || !/\d/.test(name)) {
    //     document.getElementById('name_error').textContent 
    //     = 'Name must contain both letters and numbers';
    //     console.log("Name must contain both letters and numbers");
    //     isValid = false;
    // }
  
    else {
        document.getElementById("name_error").textContent = ""; // Clear any previous error message
    }

    // Address Validation
    const address = document.getElementById('address').value;
    if (address === '' || address===null) {
        document.getElementById('add_error').textContent = 'Address is required';
        isValid = false;
    } else {
        document.getElementById('add_error').textContent = '';
    }

    // Email Validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._+-]+@([a-zA-Z0-9.-]+|\d{1,3}(\.\d{1,3}){3})\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email_error').textContent = 'Invalid email format';
        isValid = false;
    } else {
        document.getElementById('email_error').textContent = '';
    }

    // Password Validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('password_error').textContent = 'Password must be at least 6 characters long';
        isValid = false;
    } else {
        document.getElementById('password_error').textContent = '';
    }

    // Telephone Validation
    const tele = document.getElementById('tele').value;
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(tele)) {
        document.getElementById('ph_er').textContent = 'Invalid phone number (10 digits required)';
        isValid = false;
    } else {
        document.getElementById('ph_er').textContent = '';
    }

    // Course Selection Validation
    const course = document.getElementById('myselect').value;
    if (course === '0') {
        document.getElementById('demo').textContent = 
        'Please select a course';
        isValid = false;
    } else {
        document.getElementById('demo').textContent = '';
    }

     // Gender Validation with arrow function
    //  const gender = document.getElementsByName('gender')
    //  const genderSelected = Array.from(gender).some(radio => radio.checked);
    //  if (!genderSelected) {
    //      document.getElementById('gender_error').textContent = 'Please select your gender';
    //      isValid = false;
    //  } else {
    //      document.getElementById('gender_error').textContent = '';
    //  }

     // Gender Validation with normal function
    const gender = document.getElementsByName('gender');
    const genderSelected = Array.from(gender).some(function(radio) {
            return radio.checked;
        });

        if (!genderSelected) {
            document.getElementById('gender_error').textContent = 'Please select your gender';
            isValid = false;
        } else {
            document.getElementById('gender_error').textContent = '';
        }

    // Terms and Conditions Validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('terms_error').textContent 
        = 'You must agree to the terms and conditions';
        isValid = false;
    
    } else {
        document.getElementById('terms_error').textContent 
        = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }

    return isValid;

    
}

function validatePhone() {
    const tele = document.getElementById('tele').value;
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(tele)) {
        document.getElementById('ph_er').textContent = 'Invalid phone number (10 digits required)';
    } else {
        document.getElementById('ph_er').textContent = '';
    }
}

function textAreaError() {
    
}