const toggle = document.querySelector(".menu");
const navigation = document.querySelector(".nav");
const dropDown = document.querySelector(".drop");
const buy = document.querySelector(".buy");
const drop = document.querySelector(".drop-down");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

dropDown.classList.add("hidden");
let show = false;
buy.addEventListener("click", function (e) {
  e.preventDefault();
  if (!show) {
    dropDown.classList.remove("hidden");
    buy.classList.toggle(drop.after(dropDown));
    buy.style.backgroundColor = "blue";
    buy.style.color = "white";

    show = true;
  } else {
    dropDown.classList.add("hidden");
    buy.style.backgroundColor = "var(--color-tertiary)";
    buy.style.color = "black";
    show = false;
  }
});
