import { Card } from "./Card.js"

export class AmazingCard extends Card {
  constructor(...args) {
    super(...args)
  }

  set cardNumber(value) {
    const cardsImgArray = [
      // './img/90.jpg', //*use to call error
      './img/img/1.jpg',
      './img/img/2.jpg',
      './img/img/3.jpg',
      './img/img/4.jpg',
      './img/img/5.jpg',
      './img/img/6.jpg',
      './img/img/7.jpg',
      './img/img/8.jpg'
    ]
    const img = document.createElement('img');
    img.classList.add('card-img', 'img-fluid');
    img.src = cardsImgArray[--value];
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
