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
  const  newArr = [...createNumbersArray(cardQty)];
  for (let i = newArr.length - 1; i > 0; i--) {
    const  j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};
