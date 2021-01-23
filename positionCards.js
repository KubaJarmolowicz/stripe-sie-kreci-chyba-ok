import { utils } from "./utils.js";
import { cards } from "./instances.js";

function positionCards(card, index) {
  card.classList.remove("moveable");

  const distanceFromPrevCard =
    (card.getBoundingClientRect().width + utils.getBodyPadding()) * index;

  if (index > 0) {
    card.style.left = `${distanceFromPrevCard}px`;
  }

  card.style.width = "100%";

  const currentActiveCard = document.querySelector(".active");

  const currentTranslateX = utils.getTranslateX(card);

  if (currentTranslateX !== 0) {
    const rescaledTranslateX =
      (currentActiveCard.getBoundingClientRect().width +
        utils.getBodyPadding()) *
      cards.indexOf(currentActiveCard);

    card.style.transform = `translateX(${-1 * rescaledTranslateX}px)`;
  }

  card.classList.add("moveable");
}

export { positionCards };
