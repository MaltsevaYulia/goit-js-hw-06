const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    
    const {
    elements: { email, password }
    } = event.currentTarget;
    
  if (email.value === '' || password.value === '') {
      return alert('Всі поля повинні бути заповнені')
    }
  console.log(email.value, password.value);
  event.currentTarget.reset();
}