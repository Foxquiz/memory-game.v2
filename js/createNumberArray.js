//создание массива
function createNumbersArray(cardQty) {
  const numbersArray = [];
  for (let i = 1; i <= cardQty; i += 1) {
    numbersArray.push(i, i);
  };
  return numbersArray;
};

//возврат перемешанного массива
export function createShuffledArray(cardQty) {
  return createNumbersArray(cardQty).sort(function(){
    return Math.random() - 0.5;
  });
};
