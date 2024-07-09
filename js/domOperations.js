const playAgainButton = document.querySelector('#againButton');
const selectCardContentType = document.querySelector('#selectCardContentType');

export function validateInput(inputValue) {
  let cardMax = window.matchMedia("(min-width: 576px)").matches ? 10 : 6;;
  let limit = window.matchMedia("(min-width: 576px)").matches ? 10 : 6;
  switch (selectCardContentType.value) {
    case 'img':
      limit = 4;
      break;
    case 'icons':
      limit = 6;
      break;
    default:
      cardMax = window.matchMedia("(min-width: 576px)").matches ? 10 : 6;
      break;
  }
  cardMax >= limit ? cardMax = limit : limit = cardMax;
  const inRange = inputValue >= 2 && inputValue <= cardMax;
  const isOdd = inputValue % 2 === 0;
  const isValid = inRange && isOdd;
  return { isValid, cardMax };
}

//очистка поля игры
export function cleanContainer() {
  const container = document.querySelector('#game');
  if (!container) {
    return;
  }
  container.replaceChildren();
  playAgainButton.classList.add('visually-hidden');
}
//создание списка для карточек
export function createCardList() {
  let list = document.createElement('ul');
  list.classList.add('list-group', 'd-flex', 'flex-wrap', 'flex-row', 'card-list');
  return list;
}
