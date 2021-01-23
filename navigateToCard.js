import { utils } from "./utils.js";
import { domElements } from "./DOMElements.js";
import { cards, navButtons } from "./instances.js";

function navigateToCard(event) {
  const clickedBtn = event.currentTarget;
  const desiredCardNumber = navButtons.indexOf(clickedBtn);
  const currentlyActiveCardNumber = cards.indexOf(
    document.querySelector(".active")
  );

  if (desiredCardNumber >= currentlyActiveCardNumber) {
    const numberOfClicks = desiredCardNumber - currentlyActiveCardNumber;

    utils.executeNTimes(numberOfClicks, () => {
      domElements.nextBtn.click();
    });
  }

  if (desiredCardNumber < currentlyActiveCardNumber) {
    const numberOfClicks = currentlyActiveCardNumber - desiredCardNumber;

    utils.executeNTimes(numberOfClicks, () => {
      domElements.prevBtn.click();
    });
  }
}

export { navigateToCard };
