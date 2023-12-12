const heroButtons = document.querySelector('.hero-buttons');
const emailInput = document.querySelector('input[type="text"]');
const getStartedButton = document.querySelector('.btn-red');
const nav = document.querySelector('nav');
const hero = document.querySelector('.hero');

getStartedButton.addEventListener('click', () => {
  const emailAddress = emailInput.value.trim();
  if (emailAddress) {
    console.log(`Sending email address: ${emailAddress}`);
    emailInput.value = '';
  } else {
    alert('Please enter your email address');
  }
});

nav.querySelector('.btn-red-sm').addEventListener('click', () => {
  const signInForm = document.createElement('form');
  signInForm.innerHTML = `
    <div class="sign-in-form">
      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Enter your email">
      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="Enter your password">
      <button type="submit" class="btn btn-red">Sign In</button>
    </div>
  `;
  hero.appendChild(signInForm);
});
