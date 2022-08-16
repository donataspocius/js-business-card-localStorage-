"use strict";

let btn = document.querySelector(".btn");
let cardOut = document.querySelector(".card-output");
let cardOutPhoto = document.querySelector(".cardOutPhoto");
let cardOutInfo = document.querySelector(".cardOutInfo");
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let phone = document.querySelector(".phone");
let address = document.querySelector(".address");
let job = document.querySelector(".job");

let createHtmlElements = function (name, email, phone, address, job) {
  let nameOut = document.createElement("p");
  // if (nameOut) cardOutPhoto.removeChild(nameOut);
  cardOutPhoto.append(nameOut);
  nameOut.className = "nameOut";
  document.querySelector(".nameOut").textContent = `${name}`;

  let emailOut = document.createElement("p");
  cardOutInfo.append(emailOut);
  emailOut.className = "emailOut";
  document.querySelector(".emailOut").textContent = `${email}`;
  // cardOutInfo.removeChild(emailOut);

  let phoneOut = document.createElement("p");
  cardOutInfo.append(phoneOut);
  phoneOut.className = "phoneOut";
  document.querySelector(".phoneOut").textContent = `${phone}`;
  // cardOutInfo.removeChild(phoneOut);

  let addressOut = document.createElement("p");
  cardOutInfo.append(addressOut);
  addressOut.className = "addressOut";
  document.querySelector(".addressOut").textContent = `${address}`;
  // cardOutInfo.removeChild(addressOut);

  let jobOut = document.createElement("p");
  cardOutPhoto.append(jobOut);
  jobOut.className = "jobOut";
  document.querySelector(".jobOut").textContent = `${job}`;
  // cardOutPhoto.removeChild(jobOut);
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
