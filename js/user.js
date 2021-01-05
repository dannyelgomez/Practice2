import { handleFormSubmit } from './formService.js';

const userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleFormSubmit);

/*  Cerrar Modal
    Limpiar Formulario */