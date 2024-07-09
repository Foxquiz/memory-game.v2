export class Card {
  _open = false
  _success = false

  constructor(cardNumber, colCount, cardType, flip) {
    this.colCount = colCount;
    this.cardType = cardType;
    this.cardNumber = cardNumber;
    this.flip = flip;
  }

  createElement() {
    const card = document.createElement('li');
    card.classList.add('d-flex', 'cardGame', this.cardType);
    card.style.width = `calc((100% - (10px * (${this.colCount} - 1))) / ${this.colCount})`;
    card.style.height = `calc((70vh - (10px * (${this.colCount} - 1))) / ${this.colCount})`;
    card.addEventListener('click', () => {
      if (this.open == false && this.success == false) {
        this.flip(this);
        this.open = true;
      }
    })
    this.card = card;
    return card;
  }

  set cardNumber(value) {
    this._cardNumber = value;
  }

  get cardNumber() {
    return this._cardNumber;
  }

  set open(value) {
    this._open = value;
    this.card.classList.toggle('cardGame--open', value);
    this.card.innerHTML = value ? this.cardNumber : '';
  }
  get open() {
    return this._open;
  }

  set success(value) {
    this._success = value;
    this.card.classList.toggle('cardGame--success', value);
  }

  get success() {
    return this._success;
  }

  set cardType(value) {
    switch (value) {
      case 'fox':
        this._cardTypeClass = 'card-fox';
        break;
      case 'cars':
        this._cardTypeClass = 'card-cars';
        break;
      default:
        this._cardTypeClass = 'cardGame';
        break;
    }
  }

  get cardType() {
    return this._cardTypeClass;
  }

  set colCount(value) {
    this._colCount = value;;
  }

  get colCount() {
    return this._colCount;
  }

  set card(value) {
    this._card = value;;
  }

  get card() {
    return this._card;
  }
}

