import { AmazingCard } from "./AmazingCard.js";
import { Card } from "./Card.js";
import { IconsCard } from "./IconsCard.js";
import { createFirework, deleteFirework } from "./animation.js";
import { createShuffledArray } from "./createNumberArray.js";
import { cleanContainer, createCardList, validateInput } from "./domOperations.js";
import { cleanTimer, startTimer } from "./timer.js";

let cardsArray = [];
let firstOpenedCard = 0;
let secondOpenedCard = 0;

const gameContainer = document.querySelector('#game');
const startButton = document.querySelector('#startButton');
const playAgainButton = document.querySelector('#againButton');
const fieldSizeInput = document.querySelector('#input-colCount');
//для смены рубашки
const selectorCardType = document.querySelector('#selectCardType');
//выбор наполнения карточек
const selectCardContentType = document.querySelector('#selectCardContentType');

//реакция на нажатие кнопки начала игры
startButton.addEventListener('click', function () {
  const inputValue = fieldSizeInput.value;
  const { isValid, cardMax } = validateInput(inputValue);
  deleteFirework();
  cleanContainer();
  cleanTimer();

  const cardType = selectorCardType.value;
  const cardContentType = selectCardContentType.value;

  if (isValid) {
    render(inputValue, cardType, cardContentType);
  } else {
    alert(`Введите чётное число от 2 до ${cardMax}`);
    fieldSizeInput.value = 4;
    render(4, cardType, cardContentType);
  }

  startTimer();
});

function render(colCount, cardType, cardContentType) {
  cardsArray = [];
  const cardQty = (colCount * colCount) / 2;
  const shuffledArray = createShuffledArray(cardQty);
  const cardList = createCardList();
  gameContainer.append(cardList);

  for (let i = 0; i < shuffledArray.length; i += 1) {
    let card;
    if (cardContentType === 'number') {
      card = new Card(shuffledArray[i].toString(), colCount, cardType, flip);
    } else if (cardContentType === 'img') {
      card = new AmazingCard(shuffledArray[i].toString(), colCount, cardType, flip);
    } else if (cardContentType === 'icons') {
      card = new IconsCard(shuffledArray[i].toString(), colCount, cardType, flip);
    }
    cardList.append(card.createElement());
    cardsArray.push(card);
  }
  gameContainer.scrollIntoView({ behavior: "smooth" });
}

playAgainButton.addEventListener('click', function () {
  cleanContainer();
  cleanTimer();
  deleteFirework();
  startButton.disabled = false;
});

let closeOpenCardsTimer;

function flip(card) {
  if (!firstOpenedCard) {
    if (closeOpenCardsTimer) {
      clearTimeout(closeOpenCardsTimer);
    }
    closeOpenCards();
    firstOpenedCard = card;
    return;
  }

  if (!secondOpenedCard) {
    secondOpenedCard = card;

    if (firstOpenedCard.cardNumber === secondOpenedCard.cardNumber) {
      firstOpenedCard.success = true;
      secondOpenedCard.success = true;
    };
    closeOpenCardsTimer = setTimeout(closeOpenCards, 1000);
    firstOpenedCard = 0;
    secondOpenedCard = 0;
    checkAllOpenCards()
  }
}

function closeOpenCards() {
  cardsArray.forEach((card) => {
    if (card.success === true) return;
    card.open = false;
    card.innerHTML = '';
  });
}

function checkAllOpenCards() {
  const isAllCardsOpen = cardsArray.every(card => {
    return card.success == true;
  })
  if (isAllCardsOpen) {
    createFirework();
    setTimeout(deleteFirework, 5000);
    playAgainButton.classList.remove('visually-hidden');
    playAgainButton.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    cleanTimer(true);
    startButton.disabled = true;
  }
}
