"use strict";

const email = document.querySelector(".email");
const btn = document.querySelector(".btn");
const errorMessage = document.querySelector(".error-message");

// check email validity
function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!isEmailValid(email.value)) {
    errorMessage.classList.remove("hidden");
    email.classList.add("highlight-field");
  } else {
    errorMessage.classList.add("hidden");
    email.classList.remove("highlight-field");
    email.value = "";
  }
});

// remove highlight/error message when keys are being input
email.addEventListener("input", function () {
  email.classList.remove("highlight-field");
  errorMessage.classList.add("hidden");
});
