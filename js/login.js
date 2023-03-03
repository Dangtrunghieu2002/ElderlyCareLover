const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (username.value === '') {
    showError(username, 'Username is required');
  } else if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    form.submit();
  }
});

function showError(input, message) {
  const formControl = input.parentElement;
  const error = formControl.querySelector('small');
  error.innerText = message;
  form
}