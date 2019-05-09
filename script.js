"use strict";
document.querySelector("form").addEventListener("submit", displayFrogName);

function displayFrogName(event) {
  event.preventDefault();
  let dogname = document.querySelector("#dogname").value;
  document.body.append(dogname);
}