import { handleFormSubmit } from './formService.js';

const companyForm = document.getElementById('company-form');
companyForm.addEventListener('submit', handleFormSubmit);