import { handleFormSubmit } from './formService.js';

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleFormSubmit);