import { clients } from "./clients.js";
import { Card } from "./card.js";
import { CardFilling } from "./cardFilling.js";
import { NavItem } from "./navItem.js";

import { domElements } from "./DOMElements.js";

const slackFill = new CardFilling(clients[0]);
const glossierFill = new CardFilling(clients[1]);
const charityFill = new CardFilling(clients[2]);
const missguidedFill = new CardFilling(clients[3]);

const slack = new Card(slackFill);
const glossier = new Card(glossierFill);
const charity = new Card(charityFill);
const missguided = new Card(missguidedFill);

const cardsFromJs = [slack, charity, glossier, missguided];

cardsFromJs.forEach(cardObj => {
  const navItem = new NavItem(cardObj);
  navItem.addToNav();
});

cardsFromJs.forEach(cardObj => {
  domElements.carouselTrack.insertBefore(cardObj.card, domElements.nextBtn);
});
const cards = cardsFromJs.map(card => card.card);

const navButtons = Array.from(document.querySelectorAll(".bottom-nav__item"));

export { cardsFromJs, cards, navButtons };
