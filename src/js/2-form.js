const inputForm = document.querySelector('input');
inputForm.classList.add('input-form-email');
const textareaForm = document.querySelector('textarea');
textareaForm.classList.add('textarea-form-message');
const buttonForm = document.querySelector('button');
buttonForm.classList.add('btn-form');

const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
form.addEventListener('input', function (event) {
  const form = event.target;
});
