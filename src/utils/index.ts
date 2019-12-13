// ! SVG Injector
// ? npm i svg-injector -D

import SVGInjector from "svg-injector";

export function injectSvg(svgClass: string) {
  SVGInjector(document.querySelectorAll(`img.${svgClass}`));
}
