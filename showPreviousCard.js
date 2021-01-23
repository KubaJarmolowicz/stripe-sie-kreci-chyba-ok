import { utils } from "./utils.js";
import { domElements } from "./DOMElements.js";
import { cards } from "./instances.js";

function showPrevCard() {
  if (domElements.nextBtn.classList.contains("d-none"))
    domElements.nextBtn.classList.remove("d-none");

  const currentCard = document.querySelector(".active");

  const prevCard = cards[cards.indexOf(currentCard) - 1];

  cards.forEach(card => {
    const distanceToShift =
      card.getBoundingClientRect().width + utils.getBodyPadding();

    const startX = utils.getTranslateX(card);

    card.style.transform = `translateX(${startX + distanceToShift}px)`;
  });

  currentCard.classList.remove("active");
  prevCard.classList.add("active");

  utils.highlightNavItem();

  if (utils.isCurrentCardFirst()) domElements.prevBtn.classList.add("d-none");
}

export { showPrevCard };
