let x = document.querySelector(".menu_btn");
let y = document.querySelector(".navbar");

x.onclick = () => {
  x.classList.toggle("change");
  y.classList.toggle("active");
};

window.onscroll = () => {
  x.classList.remove("change");
  y.classList.remove("active");
};

// function myFunction(x) {
//   x.classList.toggle("change");
// }
