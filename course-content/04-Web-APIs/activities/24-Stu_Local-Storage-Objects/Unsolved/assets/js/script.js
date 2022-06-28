var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  var subscriber = {
      firstName : firstNameInput.value.trim(),
      lastName : lastNameInput.value.trim(),
      email : emailInput.value,
      password : passwordInput.value,
  }

  localStorage.setItem("subcriber", JSON.stringify(subscriber));
     // TODO: Set new submission to local storage 
  
});
