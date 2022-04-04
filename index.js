const modalForm = document.querySelector(".modal-form");
const modalWrapper = document.querySelector(".modal-wrapper");
const signUpButton = document.querySelector(".sign-up-button");

signUpButton.addEventListener("click", () => {
  modalForm.style.display = "flex";
});

modalForm.addEventListener("click", () => {
  modalForm.style.display = "none";
});
