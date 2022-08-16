"use strict";

let btn = document.querySelector(".btn");
let cardOut = document.querySelector(".card-output");
let cardOutPhoto = document.querySelector(".card-output");
let cardOutInfo = document.querySelector(".card-output");
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let phone = document.querySelector(".phone");
let address = document.querySelector(".address");
let job = document.querySelector(".job");

let createHtmlElements = function (name, email, phone, address, job) {
  let nameOut = document.createElement("p");
  cardOutPhoto.append(nameOut);
  nameOut.className = "nameOut";
  document.querySelector(".nameOut").textContent = `${name}`;

  let emailOut = document.createElement("p");
  cardOutInfo.append(emailOut);
  emailOut.className = "emailOut";
  document.querySelector(".emailOut").textContent = `${email}`;

  let phoneOut = document.createElement("p");
  cardOutInfo.append(phoneOut);
  phoneOut.className = "phoneOut";
  document.querySelector(".phoneOut").textContent = `${phone}`;

  let addressOut = document.createElement("p");
  cardOutInfo.append(addressOut);
  addressOut.className = "addressOut";
  document.querySelector(".addressOut").textContent = `${address}`;

  let jobOut = document.createElement("p");
  cardOutPhoto.append(jobOut);
  jobOut.className = "jobOut";
  document.querySelector(".jobOut").textContent = `${job}`;
};

btn.addEventListener("click", function (e) {
  createHtmlElements(
    name.value,
    email.value,
    phone.value,
    address.value,
    job.value
  );

  let userData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
    job: job.value,
  };

  window.localStorage.setItem("user", JSON.stringify(userData));
});

window.addEventListener("DOMContentLoaded", (e) => {
  let userData = JSON.parse(window.localStorage.getItem("user"));

  if (!userData) return;

  createHtmlElements(
    userData.name,
    userData.email,
    userData.phone,
    userData.address,
    userData.job
  );

  name.value = `${userData.name}`;
  email.value = `${userData.email}`;
  phone.value = `${userData.phone}`;
  address.value = `${userData.address}`;
  job.value = `${userData.job}`;
});
