const STORAGE_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const msgTextarea = form.querySelector('textarea');

populateForm();

form.addEventListener('input', onTextareaInput);

form.addEventListener('submit', onFormSubmit);

function onTextareaInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
}

function populateForm() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);

  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);

    emailInput.value = email;
    msgTextarea.value = message;

    formData.email = email;
    formData.message = message;
  }
}
