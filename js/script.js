const intro = document.getElementById('intro');
const giftBox = document.querySelector('.gift-box');
const card = document.getElementById('card');

intro.addEventListener('click', () => {
  // Start the elegant open animation
  giftBox.classList.add('open');

  // Balloons start rising immediately
  launchBalloons();

  // Fade out intro and show card
  setTimeout(() => intro.style.animation = 'fadeOut 0.8s forwards', 800);

  setTimeout(() => {
    intro.classList.add('hidden');
    card.style.display = 'block';
    card.style.animation = 'popOpen 1s ease-out forwards';
  }, 1600);
});

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  document.body.appendChild(balloon);

  const colors = ['#ff8fa3', '#ffb3c6', '#ffc8dd', '#cdb4db', '#bde0fe', '#a2d2ff'];
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = 5 + Math.random() * 3 + 's';

  setTimeout(() => balloon.remove(), 8000);
}

function launchBalloons() {
  let count = 0;
  const interval = setInterval(() => {
    createBalloon();
    count++;
    if (count > 25) clearInterval(interval);
  }, 500);
}
