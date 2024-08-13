const userName = document.getElementById("inputName");
const userAge = document.getElementById("inputAge");
const userEmail = document.getElementById("inputEmail");
const form = document.getElementById("formInputs");

form.addEventListener("submit", e => {
    e.preventDefault();
    if (validateEmail(userEmail.value)) {
        console.log(`Nome: ${userName.value}\nIdade: ${userAge.value}\nEmail: ${userEmail.value}`);
    };
})

function validateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (validRegex.test(input)) {
        return true;
    } else {
        console.log("Email inválido!");
        return false;
    }
  }