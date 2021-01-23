class CardFilling {
  constructor({ clientName, imgURL, clientSVG, clientMsg, colors, navSvgURL }) {
    this.clientName = clientName;
    (this.imgURL = imgURL),
      (this.clientSVG = clientSVG),
      (this.clientMsg = clientMsg),
      (this.primaryClr = colors.primaryClr),
      (this.secondaryClr = colors.secondaryClr ? colors.secondaryClr : null),
      (this.navSvgURL = navSvgURL);
  }
}

export { CardFilling };
