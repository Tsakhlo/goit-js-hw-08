import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('[name="email"]');
const message = form.querySelector('[name="message"]');
const STORAGE_KEY = "feedback-form-state";

const inputMessage = localStorage.getItem('STORAGE_KEY');

form.addEventListener('input', throttle(inputForm, 500));
form.addEventListener('submit', submitForm);

if(inputMessage){
    const saveElement = JSON.parse(inputMessage);
    email.value = saveElement.email;
    message.value = saveElement.message;
}
else{
    form.reset();
}

function inputForm(){
   
    const formData = {
        email:  email.value,
        message: message.value
    }
    localStorage.setItem('STORAGE_KEY', JSON.stringify(formData));
}

function submitForm(event){
    event.preventDefault();
    
    const formData = {
        email:  email.value,
        message: message.value
    }
    console.log(formData);
    localStorage.removeItem('STORAGE_KEY');
    form.reset();
}
