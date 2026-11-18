const screens = ['sign-in', 'questions', 'confirmation'];
const signInForm = document.getElementById('sign-in-form');
const responseForm = document.getElementById('response-form');
const privateKey = document.getElementById('private-key');

function showScreen(id) {
  screens.forEach((screen) => {
    document.getElementById(screen).hidden = screen !== id;
  });
  const heading = document.getElementById(id).querySelector('h1');
  heading.tabIndex = -1;
  heading.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

privateKey.addEventListener('input', () => privateKey.setCustomValidity(''));

signInForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!privateKey.value.trim()) {
    privateKey.setCustomValidity('Enter a demo private key.');
    privateKey.reportValidity();
    return;
  }
  signInForm.reset();
  showScreen('questions');
});

responseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name');
  if (!name.value.trim()) {
    name.setCustomValidity('Enter your name.');
    name.reportValidity();
    return;
  }
  responseForm.reset();
  showScreen('confirmation');
});

document.getElementById('name').addEventListener('input', (event) => {
  event.target.setCustomValidity('');
});

function resetDemo() {
  signInForm.reset();
  responseForm.reset();
  privateKey.setCustomValidity('');
  document.getElementById('name').setCustomValidity('');
  showScreen('sign-in');
}

document.getElementById('sign-out').addEventListener('click', resetDemo);
document.getElementById('start-again').addEventListener('click', resetDemo);
