import "./assets/styles/main.scss";
import { injectSvg } from "./utils";

// Trigger dark theme with button click
const btn: HTMLElement | null = document.getElementById("btn");
const htmlBody = document.querySelector("body");
const headline = document.querySelector("h1");

if (btn && htmlBody) {
  btn.addEventListener("click", () => {
    htmlBody.classList.toggle("dark-theme");
  });
}

(async () => {
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => {
      if (headline) headline.innerText = json.title;
    });
})();

// ie <img class="inj" src="x.svg" /> will be rendered as an inline SVG
injectSvg("inj");