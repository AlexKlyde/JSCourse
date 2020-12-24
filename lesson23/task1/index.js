// так можно получить данные формы - ВАРИАНТ 1:
/* const formFields = [...new FormData(formElem)];
// formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

const formData = formFields.reduce((acc, formField) => {
  const prop = formField[0]; // здесь "name" инпута
  const value = formField[1]; // здесь "value" инпута
  // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
  const [prop, value] = formField;
  return {
    // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
    ...acc,
    // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
    [prop]: value,
  };
}, {});
 */
const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isReqired = value =>
  value ? undefined : 'Reqiured';

const isEmail = value =>
  value.includes('@') ? undefined : 'Should be an email';

const validatorsByField = {
  email: [isReqired, isEmail],
  password: [isReqired],
}

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map(validator => validator(value))
    .filter(errText => errText)
    .join(', ');
}

const onEmailChange = event => {
  const errorText = validate('email', event.target.value);    
  emailErrorElem.textContent = errorText;
}

const onPasswordChange = event => {
  const errorText = validate('password', event.target.value);
  passwordErrorElem.textContent = errorText;
}

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);


const formElem = document.querySelector('.login-form');
// более простой формат считывания формы - ВАРИАНТ 2:

const onFormSubmit = event => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElem));
  alert(JSON.stringify(formData));
}


formElem.addEventListener('submit', onFormSubmit);

