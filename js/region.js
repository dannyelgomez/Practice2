import { handleFormSubmit } from './formService.js';

const regionForm = document.getElementById('region-form');
regionForm.addEventListener('submit', handleFormSubmit);