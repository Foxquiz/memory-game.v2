import { Card } from "./Card.js"

export class IconsCard extends Card {
  constructor(...args) {
    super(...args)
  }

  set cardNumber(value) {
    const img = document.createElement('img');
    img.classList.add('card-img', 'card-icon', 'img-fluid');
    img.src = `./img/icons/${value}.png`;
    img.onerror = () => {
      img.src = './img/error.png';
      img.classList.add('card-img--error');
      super.cardNumber = img.outerHTML;
      throw new Error('Изображение не удалось загрузить')
    }
    super.cardNumber = img.outerHTML;
  }

  get cardNumber() {
    return this._cardNumber;
  }
}
