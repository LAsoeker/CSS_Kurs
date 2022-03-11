"use strict";

document.querySelector(".btn--big").addEventListener("click", (e) => {
  console.log("CLICKED");
  document.querySelector(".btn--big").classList.toggle(".btn--big--press");
});

console.log(document.querySelector(".btn"));

function clicked() {
  console.log("Button wurde geclickt");
}
