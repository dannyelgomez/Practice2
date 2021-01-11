import { handleFormSubmit } from './formService.js';

const countryForm = document.getElementById('country-form');
countryForm.addEventListener('submit', handleFormSubmit);