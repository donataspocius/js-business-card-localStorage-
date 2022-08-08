"use strict";

let btn = document.querySelector(".btn");

let name = document.querySelector(".name");
let nameOut = document.querySelector(".nameOut");

let emailOut = document.querySelector(".emailOut");
let email = document.querySelector(".email");

let phone = document.querySelector(".phone");
let phoneOut = document.querySelector(".phoneOut");

let address = document.querySelector(".address");
let addressOut = document.querySelector(".addressOut");

let job = document.querySelector(".job");
let jobOut = document.querySelector(".jobOut");

// let userData = {};

btn.addEventListener("click", function (e) {
  console.log(e.target);
  nameOut.textContent = `${name.value}`;
  emailOut.textContent = `${email.value}`;
  phoneOut.textContent = `${phone.value}`;
  addressOut.textContent = `${address.value}`;
  jobOut.textContent = `${job.value}`;

  let userData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
    job: job.value,
  };

  window.localStorage.setItem("user", JSON.stringify(userData));

  console.log(userData);
});

window.addEventListener("DOMContentLoaded", (e) => {
  let userData = JSON.parse(window.localStorage.getItem("user"));
  console.log(userData);
  console.log("loaded");

  nameOut.textContent = `${userData.name}`;
  emailOut.textContent = `${userData.email}`;
  phoneOut.textContent = `${userData.phone}`;
  addressOut.textContent = `${userData.address}`;
  jobOut.textContent = `${userData.job}`;

  name.value = userData.name;
  email.value = userData.email;
  phone.value = userData.phone;
  address.value = userData.address;
  job.value = userData.job;
});
