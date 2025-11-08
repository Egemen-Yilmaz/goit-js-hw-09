const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';


const input = feedbackForm.addEventListener('input', event => {
    const email = event.target.name;
    const message = event.target.value;

    const infos = {
        email: feedbackForm.elements.email.value,
        message: feedbackForm.elements.message.value,
    }


    const localForm = localStorage.setItem(STORAGE_KEY, JSON.stringify(infos));
});



function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if(savedData) {
        const parsedForm = JSON.parse(savedData);

        feedbackForm.elements.email.value = parsedForm.email || "";
        feedbackForm.elements.message.value = parsedForm.message || "";
    }

};

populateForm();

feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

    const emailValue = feedbackForm.elements.email.value.trim();
    const messageValue = feedbackForm.elements.message.value.trim();

    if(!emailValue || !messageValue) {
        alert('Lütfen hem E-posta hem de Mesaj alanlarını doldurunuz. ')
        return;
    }

    console.log({
        email: emailValue,
        message: messageValue
    });

    feedbackForm.reset();

    localStorage.removeItem(STORAGE_KEY);
});