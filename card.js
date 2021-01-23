class Card {
  constructor({
    clientName,
    imgURL,
    clientSVG,
    clientMsg,
    primaryClr,
    secondaryClr,
    navSvgURL
  }) {
    this.card = document.createElement("div");
    this.card.classList.add("carousel__card");
    this.card.innerHTML = `<div class="carousel__image-part-wrapper">
      <img
        class="carousel__image"
        src="${imgURL}"
        alt=""
      />
      <div class="carousel__image-overlay"></div>
      <div class="carousel__client-svg-wrapper">
           
      </div>
      <div class="carousel__svg-border-wrapper">
        <svg
          class="carousel__svg-border"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </div>

    <div class="carousel__message-part-wrapper">
      <p class="carousel__message">
     ${clientMsg.replace(
       clientName,
       `<span class="carousel__client-name">${clientName}</span>`
     )}
      </p>
      <a class="carousel__link" href="#">
        <span>Learn more about our users</span>
        <span>&#x279c;</span>
      </a>
    </div>`;

    this.primaryClr = primaryClr;
    this.secondaryClr = secondaryClr ? secondaryClr : primaryClr;
    this.navSvgURL = navSvgURL;

    this.card.querySelector(
      ".carousel__client-svg-wrapper"
    ).innerHTML = clientSVG;
    this.card
      .querySelector(".carousel__client-svg-wrapper svg")
      .classList.add("carousel__client-svg");

    this.card.querySelector(
      ".carousel__image-overlay"
    ).style.color = this.primaryClr;
    this.card.querySelector(".carousel__link").style.color = this.secondaryClr;
  }
}

export { Card };
