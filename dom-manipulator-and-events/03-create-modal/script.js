"use strict;";

let modalButtons = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let closeButton = document.querySelector(".close-modal");
const updateProperty = (elem, operation, className) => {
  elem[operation](className);
};

const openModal = () => {
  updateProperty(modal.classList, "remove", "hidden");
  updateProperty(overlay.classList, "remove", "hidden");
};
const closeModal = () => {
  // modal.classList.add("hidden");
  // overlay.classList.add("hidden");
  updateProperty(modal.classList, "add", "hidden");
  updateProperty(overlay.classList, "add", "hidden");
};

// Register event listener
modalButtons.forEach((btn) => btn.addEventListener("click", openModal));
closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") closeModal();
});
