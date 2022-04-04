const body = document.querySelector("body");
const modalForm = document.querySelector(".modal-form");
const signUpButton = document.querySelector(".sign-up-button");

signUpButton.addEventListener("click", () => {
  modalForm.style.display = "flex";
  body.style.overflow = "hidden";
});

modalForm.addEventListener("click", () => {
  modalForm.style.display = "none";
  body.style.overflow = "scroll";
});
