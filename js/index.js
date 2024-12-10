const formElement = document.querySelector('[data-js="form"]');
const messageElement = document.querySelector('[data-js="personal-message"]');

//console.log('ELEMENT_', formElement);
// click, input.
formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  // LISTE aller Elemente
  const formElements = event.target.elements;

  console.log('formElements_', formElements);

  //   const myObject = {};

  const formData = {
    firstname: formElements.firstName.value,
    userAge: formElements.age.value,
    email: formElements.email.value,
  };

  // Object Like Object
  const rawFormData = new FormData(event.target);
  const formDataObject = Object.fromEntries(rawFormData);

  console.log('JS Object_', formDataObject);

  event.target.reset();
  formElements.firstName.focus();
});

messageElement.addEventListener('input', (event) => {
  const message = event.target.value;

  console.log('MESSAGE CHARS_', message.length);
});
