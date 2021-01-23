import { utils } from "./utils.js";
import { domElements } from "./DOMElements.js";
import { cards } from "./instances.js";

function showNextCard() {
  if (domElements.prevBtn.classList.contains("d-none"))
    domElements.prevBtn.classList.remove("d-none");

  const currentCard = document.querySelector(".active");

  const nextCard = cards[cards.indexOf(currentCard) + 1];

  cards.forEach(card => {
    const distanceToShift =
      card.getBoundingClientRect().width + utils.getBodyPadding();

    const startX = utils.getTranslateX(card);

    card.style.transform = `translateX(${startX - distanceToShift}px)`;
  });

  currentCard.classList.remove("active");
  nextCard.classList.add("active");

  utils.highlightNavItem();

  if (utils.isCurrentCardLast()) domElements.nextBtn.classList.add("d-none");
}

export { showNextCard };
