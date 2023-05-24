const scrollButton = document.getElementById("scrollButton");
const targetSection = document.getElementById("targetSection");
const kontaktaButton = document.getElementById("kontakt");
const kontaktaForm = document.getElementById("kontaktForm");
const vail = document.getElementById("vail");
const close = document.getElementById("close");

kontaktaForm.classList.add("hidden");

scrollButton.addEventListener("click", function () {
  targetSection.scrollIntoView({ behavior: "smooth" });
});


kontaktaButton.addEventListener("click", function () {
  kontaktaForm.classList.remove("hidden");
  vail.classList.remove("hidden");
})

close.addEventListener("click", function () {
  kontaktaForm.classList.add("hidden");
  vail.classList.add("hidden");
})


