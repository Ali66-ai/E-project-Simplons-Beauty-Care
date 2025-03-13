const name = document.querySelector('.contact-inputs[name="name"]');
const email = document.querySelector('.contact-inputs[name="email"]');
const message = document.querySelector('.contact-inputs[name="message"]');
const form = document.querySelector('.contact-left');


name.addEventListener('input', () => {
    if (/\d/.test(name.value)) {
        alert('Please enter a valid name (letters only)');
        name.value = name.value.replace(/\d/g, ''); 
    }
});

form.addEventListener('submit', (e) => {
    let messages = [];
    console.log('Form submitted'); // 

    if (name.value.trim() === '') {
        messages.push('Name is required');
    }

    if (email.value.trim() === '') {
        messages.push('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        messages.push('Email is not valid');
    }

    if (message.value.trim() === '') {
        messages.push('Message is required');
    }

    if (messages.length > 0) {
        e.preventDefault();
        console.log('Validation messages:', messages);
        alert(messages.join(', '));
    }
});