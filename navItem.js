class NavItem {
  constructor({ navSvgURL }) {
    this.nav = document.querySelector(".bottom-nav");
    this.button = document.createElement("button");
    this.button.classList.add("bottom-nav__item");
    this.button.innerHTML = `<img
            class="bottom-nav__image"
            src="${navSvgURL}"
            alt=""
          />`;
  }

  addToNav() {
    this.nav.appendChild(this.button);
  }
}

export { NavItem };
