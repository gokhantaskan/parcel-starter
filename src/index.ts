import { injectSvg } from "./utils";

// Trigger dark theme with button click
const btn = document.getElementById("btn");
const htmlBody = document.querySelector("body");

if (btn && htmlBody) {
  btn.addEventListener("click", () => {
    htmlBody.classList.toggle("dark-theme");
  });
}

injectSvg("inj");