import { handleFormSubmit } from './formService.js';

const cityForm = document.getElementById('city-form');
cityForm.addEventListener('submit', handleFormSubmit);