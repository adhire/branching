"use strict";
document.querySelector("form").addEventListener("submit", displayCatName);

function displayCatName(event) {
  event.preventDefault();
  let dogname = document.querySelector("#dogname").value;
  document.body.append(dogname);
}


