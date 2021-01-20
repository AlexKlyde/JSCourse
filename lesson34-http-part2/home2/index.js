const loginForm = document.querySelector('.login-form');
const errorElem = document.querySelector('.error-text');
const submitBtn = document.querySelector('.submit-button');

const onValidForm = () => {
  errorElem.textContent = '';

  if (loginForm.reportValidity()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

const onFormSubmit = event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(loginForm));

  fetch('https://5ff9ad2b17386d0017b51ffd.mockapi.io/api/v1/form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (response.ok) {
        return response.text();
      }

      throw new Error('Failed to create user');
    })
    .then(userData => {
      alert(userData);
      loginForm.reset();
    })
    .catch(error => {
      errorElem.textContent = error.message;
    });
};

loginForm.addEventListener('submit', onFormSubmit);
loginForm.addEventListener('input', onValidForm);

