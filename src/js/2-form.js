const FEEDBACK_FORM_STATE = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
};

let formData = {
  email: '',
  message: '',
};

refs.form.addEventListener('input', handleFormInput);
refs.form.addEventListener('submit', handleFormSubmit);
document.addEventListener('DOMContentLoaded', handleLocalStorageOnLoad);

function handleFormInput(e) {
  formData[e.target.name] = e.target.value.trim();
  try {
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
  } catch {
    return;
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  const formKeys = Object.keys(formData);
  let isFormFilled = formKeys.every(key => e.currentTarget.elements[key].value);

  if (isFormFilled) {
    console.log(formData);
    localStorage.removeItem(FEEDBACK_FORM_STATE);
    e.currentTarget.reset();
  } else {
    alert('Fill please all fields');
  }
}

function handleLocalStorageOnLoad() {
  try {
    const formDataFromStorage = JSON.parse(
      localStorage.getItem(FEEDBACK_FORM_STATE)
    );

    if (formDataFromStorage) {
      const formKeys = Object.keys(formDataFromStorage);
      formData = formDataFromStorage;

      formKeys.forEach(key => {
        refs.form.elements[key].value = formDataFromStorage[key];
      });
    }
  } catch {
    return;
  }
}
