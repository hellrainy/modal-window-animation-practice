// Head explosion effect for modal window
const openBtn = document.querySelector('.open-modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.modal-overlay');
const headImg = document.getElementById('head-img');

let state = 'idle';
let explosionDelay = 2250;
let returnDelay = 1200;

openBtn.addEventListener('click', () => {
  if (state !== 'idle') return;
  state = 'exploding';

  headImg.src = 'img/explosion.gif';

  setTimeout(() => {
    overlay.classList.add('show');
    headImg.src = 'img/return.gif';
    state = 'returning';

    setTimeout(() => {
      headImg.src = 'img/head.png';
      state = 'idle';
    }, returnDelay);

  }, explosionDelay);
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('show');
});

// Typewriter effect for .advice
function typeText(paragraph, text, speed, callback) {
  paragraph.textContent = '';
  paragraph.style.visibility = 'visible';
  const span = document.createElement('span');
  paragraph.appendChild(span);
  let i = 0;

  const interval = setInterval(() => {
    span.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}

function startAdviceTyping() {
  const paragraphs = document.querySelectorAll('.advice p');
  const texts = Array.from(paragraphs).map(p => p.textContent);

  let index = 0;

  function next() {
    if (index >= paragraphs.length) return;
    typeText(paragraphs[index], texts[index], 30, () => {
      index++;
      setTimeout(next, 100);
    });
  }

  next();
}

window.addEventListener('DOMContentLoaded', startAdviceTyping);
