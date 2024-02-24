"use strict";

const firstname = document.querySelector(".first-name-input");
const middlename = document.querySelector(".Middle-name-input");
const lastname = document.querySelector(".Last-name-input");
const Email = document.querySelector(".Email-input");
const password = document.querySelector(".confirm-input-input");
const popup = document.querySelector(".popup");
const sumbit_btn = document.querySelector(".button-sumbit");
const close_btn = document.querySelector(".close-btn");

popup.classList.add("hidden");
// all text lines
const fullname_el = document.querySelector(".fullname-text");
const email_el = document.querySelector(".email-text");

function check() {
  document.querySelector(".overlay").classList.remove("hidden");
  const fullname =
    firstname.value + " " + middlename.value + " " + lastname.value;
  popup.classList.remove("hidden");
  fullname_el.textContent = "";
  email_el.textContent = "";
  fullname_el.append("Full Name: " + fullname);
  email_el.append("E-Mail   : " + Email.value);
}
function close() {
  if (!popup.classList.contains("hidden")) {
    document.querySelector(".overlay").classList.add("hidden");
    popup.classList.add("hidden");
  }
}

close_btn.addEventListener("click", close);
sumbit_btn.addEventListener("click", check);
