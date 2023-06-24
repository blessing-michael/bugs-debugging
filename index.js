const emailInput = document.getElementById('email');
const msgInput = document.querySelector('.message');
const nameInput = document.getElementById('name');

function saveData() {
  const userData = {
    name: nameInput.value,
    email: emailInput.value,
    message: msgInput.value,

  };
  localStorage.setItem('userData', JSON.stringify(userData));

}
