import "./style.css";

import { domElements } from "./DOMElements.js";
import { cards, navButtons } from "./instances.js";

import { positionCards } from "./positionCards.js";
import { showPrevCard } from "./showPreviousCard.js";
import { showNextCard } from "./showNextCard.js";
import { navigateToCard } from "./navigateToCard.js";

("use strict");

cards[0].classList.add("active");
navButtons[0].classList.add("active");

window.addEventListener("resize", () => {
  cards.forEach(positionCards);
});

domElements.nextBtn.addEventListener("click", showNextCard);
domElements.prevBtn.addEventListener("click", showPrevCard);

navButtons.forEach(btn => {
  btn.addEventListener("click", navigateToCard);
});

cards.forEach(positionCards);
