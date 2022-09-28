import throttle from 'lodash.throttle';
import {save, load, remove} from './storage';
const formEl = document.querySelector(".feedback-form");


const STORAGE_KEY = 'feedback-form-state'

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInputChange, 500));

function onInputChange (e) {
    const {name, value} = e.target;

    let saveData = load(STORAGE_KEY);
    saveData = saveData ? saveData : {};
    saveData[name] = value;

    save(STORAGE_KEY, saveData)
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
    remove(STORAGE_KEY);

    console.log(userData);
    
}

function populateDataForm () {
    const savedDataForm = load(STORAGE_KEY);
    if(!savedDataForm) {
        return;
    } 
    Object.entries(dataForm).forEach(([name, value]) => {
            formEl.elements[name].value = value;
        });
}
