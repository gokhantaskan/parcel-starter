import "./assets/styles/main.scss";
import { injectSvg } from "./utils";

// Trigger dark theme with button click
const btn: HTMLElement | null = document.getElementById("btn");
const htmlBody: HTMLElement | null = document.querySelector("body");

if (btn && htmlBody) {
  btn.addEventListener("click", () => {
    htmlBody.classList.toggle("dark-theme");
  });
}

// ex. <img class="inj" src="x.svg" /> will be rendered
injectSvg("inj");