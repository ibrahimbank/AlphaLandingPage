const toggle = document.querySelector(".menu");
const navigation = document.querySelector(".nav");
const dropDown = document.querySelector(".drop");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

dropDown.classList.add("hidden");
