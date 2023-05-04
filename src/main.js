const scrollButton = document.getElementById("scrollButton");
const targetSection = document.getElementById("targetSection");
let scrollState = false;

scrollButton.addEventListener("click", function () {
  if (!scrollState) {
    targetSection.scrollIntoView({ behavior: "smooth" });
    scrollState = true;
  } else {
    document.body.scrollIntoView({ behavior: "smooth" });
    scrollState = false;
  }
});
