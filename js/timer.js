import { cleanContainer } from "./domOperations.js";

//таймер
const timer = document.querySelector('#timer');
timer.classList.add('visually-hidden');
const TIME_LIMIT = 60;

let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
//внешний вид оставшегося времени
export function formatTimeLeft(time) {
  // Наибольшее целое число меньше или равно результату деления времени на 60.
  const minutes = Math.floor(time / 60);
  // Секунды – это остаток деления времени на 60 (оператор модуля)
  let seconds = time % 60;
  // Если значение секунд меньше 10, тогда отображаем его с 0 впереди
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  // Вывод в формате MM:SS
  return `${minutes}:${seconds}`;
}
//функция таймера
export function startTimer() {
  timer.classList.remove('visually-hidden');
  timerInterval = setInterval(() => {
    // Количество времени, которое прошло, увеличивается на  1
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    // Обновляем метку оставшегося времени
    timer.innerHTML = formatTimeLeft(timeLeft);
    if (timeLeft === 0) {
      cleanContainer();
      cleanTimer();
      alert('Время вышло, но Вы можете попробовать ещё раз!');
    }
  }, 1000);

  timer.innerHTML = formatTimeLeft(timeLeft);
}
//функция очистки таймера
export function cleanTimer(win = false) {
  if (win) {
    clearInterval(timerInterval);
    return;
  }
  timer.innerHTML = `...`;
  timeLeft = TIME_LIMIT;
  timePassed = 0
  timer.classList.add('visually-hidden');
}
