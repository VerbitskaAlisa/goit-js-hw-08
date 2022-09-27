const formEl = document.querySelector(".feedback-form");
const textareaEl = document.querySelector(".feedback-form textarea");
const inputEl = document.querySelector(".feedback-form input");

const STORAGE_KEY = 'feedback-form-state'

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', onInputChange);

function onInputChange (e) {
    const {
        elements: {email, message}
    } = e.currentTarget;
    const userData = {
        email: email.value,
        message: message.value,
    }
    const userDataJson = JSON.stringify(userData);
    localStorage.setItem(STORAGE_KEY, userDataJson);
}

populateDataForm();

function onFormSubmit (e) {
    e.preventDefault();
    const {
        elements: {email, message}
    } = e.currentTarget;

    if(email.value === "") {
        alert("Please fill in all the fields!");
        return;
    }

    const userData = {
        email: email.value,
        message: message.value,
    }

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(userData);
    
}

function populateDataForm () {
    const savedDataForm = localStorage.getItem(STORAGE_KEY);
    if(savedDataForm) {
        const dataForm = JSON.parse(savedDataForm);
        inputEl.value = dataForm.email;
        textareaEl.value = dataForm.message;
    }
}
