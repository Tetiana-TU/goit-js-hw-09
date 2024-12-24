const inputForm = document.querySelector('input');
inputForm.classList.add('input-form-email');
const textareaForm = document.querySelector('textarea');
textareaForm.classList.add('textarea-form-message');
const buttonForm = document.querySelector('button');
buttonForm.classList.add('btn-form');



const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {
   email: '',
  message: '',
};

const fillFormFields = () => {
  try {
    if (localStorage.length === 0) {
      return 'Fill please all fields';
    }

    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    formData = formDataFromLS;

    for (const key in formDataFromLS) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  } catch (err) {
    console.log(err);
  }
};

fillFormFields();

const onFormFieldInput = event => {
  const { target: formFieldEl } = event;

  const fieldValue = formFieldEl.value;
  const fieldName = formFieldEl.name;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } 

  const { currentTarget: formEl } = event;

  formEl.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
  
  