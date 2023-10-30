// these are the constants containing all important HTML elements 
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

// These are the event listeners for dynamically adding and removing show-nav class...
open.addEventListener("click", () => {
  container.classList.add("show-nav");
});
close.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
