export function createFirework() {
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  div1.classList.add('firework');
  div2.classList.add('before');
  div3.classList.add('after');

  div1.append(div2, div3);
  document.querySelector('#game').append(div1);
}

export function deleteFirework() {
  if (!document.querySelector('.firework')) return;
  document.querySelector('.firework').remove();
}
