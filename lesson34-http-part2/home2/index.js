const baseUrl = 'https://5ff9ad2b17386d0017b51ffd.mockapi.io/api/v1/form';

const formElem = document.querySelector('.login-form');
const errorElem = document.querySelector('.error-text');
const inputElems = document.querySelectorAll('.form-input');
const submitBtn = document.querySelector('.submit-button');

const fetchUserData = formData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  });

const onValidForm = () => {
  errorElem.textContent = '';

  if (formElem.reportValidity()) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', 'true');
  }
};

const onFormSubmit = event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(formElem));

  fetchUserData(formData)
    .then(response =>
      response.ok ? response.json() : Promise.reject(response),
    )
    .then(result => alert(JSON.stringify(result)))
    .then(() =>
      inputElems.forEach(item => {
        item.value = '';
      }),
    )
    .catch(() => {
      errorElem.textContent = 'Failed to create user';
    });
};

formElem.addEventListener('submit', onFormSubmit);
formElem.addEventListener('input', onValidForm);
