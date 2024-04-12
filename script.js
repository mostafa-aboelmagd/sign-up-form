let passwordField = document.querySelector("#password");
let confirmPasswordField = document.querySelector("#confirm_password");

let passwordInputContainer = document.querySelector(".password_input");

let passwordMatchText = document.createElement("span");
passwordMatchText.textContent = "* passwords don't match";
passwordMatchText.classList.add("star", "password_match_text")

document.addEventListener("DOMContentLoaded", () => {
    passwordInputContainer.appendChild(passwordMatchText);
});


passwordField.addEventListener("change", () => {
    if(passwordField.value !== confirmPasswordField.value)
    {
        passwordField.setCustomValidity("Invalid field.");
        confirmPasswordField.setCustomValidity("Invalid field.");
        if(document.querySelector(".password_match_text") === null)
        {
            passwordInputContainer.appendChild(passwordMatchText);
        }
    }
    else
    {
        passwordField.setCustomValidity("");
        confirmPasswordField.setCustomValidity("");
        if(document.querySelector(".password_match_text") !== null)
        {
            passwordInputContainer.removeChild(passwordMatchText);
        }
    }
});

confirmPasswordField.addEventListener("change", () => {
    if(passwordField.value !== confirmPasswordField.value)
    {
        passwordField.setCustomValidity("Invalid field.");
        confirmPasswordField.setCustomValidity("Invalid field.");
        if(document.querySelector(".password_match_text") === null)
        {
            passwordInputContainer.appendChild(passwordMatchText);
        }
    }
    else
    {
        passwordField.setCustomValidity("");
        confirmPasswordField.setCustomValidity("");
        if(document.querySelector(".password_match_text") !== null)
        {
            passwordInputContainer.removeChild(passwordMatchText);
        }
    }
});