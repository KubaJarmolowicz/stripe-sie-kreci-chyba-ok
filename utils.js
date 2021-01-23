import { domElements } from "./DOMElements.js";
import { cards, navButtons } from "./instances.js";

function executeNTimes(n, cb) {
  let numberOfExecutions = n;
  while (numberOfExecutions > 0) {
    cb();
    numberOfExecutions--;
  }
  return;
}

function getBodyPadding() {
  const currentBodyPadding = domElements.carousel.getBoundingClientRect().x;

  return currentBodyPadding;
}

function isCurrentCardLast() {
  const currentCard = domElements.carousel.querySelector(".active");
  return cards.indexOf(currentCard) === cards.length - 1 ? true : false;
}

function isCurrentCardFirst() {
  const currentCard = domElements.carousel.querySelector(".active");
  return cards.indexOf(currentCard) === 0 ? true : false;
}

function highlightNavItem() {
  navButtons.forEach(item => {
    item.classList.remove("active");
  });

  const currentCard = domElements.carousel.querySelector(".active");

  navButtons[cards.indexOf(currentCard)].classList.add("active");
}

function getTranslateX(element) {
  const style = element.style.transform;

  let translateX = style.match(/[\-\+\d\.]+[e]?/g);
  if (translateX)
    translateX = translateX.length > 1 ? translateX.join("") : translateX;
  const translateX_Val = +translateX;

  return translateX_Val;
}

export const utils = {
  executeNTimes,
  getBodyPadding,
  isCurrentCardLast,
  isCurrentCardFirst,
  highlightNavItem,
  getTranslateX
};
