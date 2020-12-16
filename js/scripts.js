const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener("click", selectView);
});

function selectView(event) {
    const formName = event.currentTarget.getAttribute('data-form');
    setTimeout(() => {
        const form = document.getElementById(formName);
        if (form) {
            form.addEventListener("submit", handleFormSubmit);
        }
    }, 5000);
}

/* 1_users */
/* const userForm = document.getElementById("user-form");
userForm.addEventListener("submit", handleFormSubmit); */

/* 2_regions */
/* const regionForm = document.getElementById("region-form");
regionForm.addEventListener("submit", handleFormSubmit); */

/* 3_countries */
/* const countryForm = document.getElementById("country-form");
countryForm.addEventListener("submit", handleFormSubmit); */

/* 4_contacts */
/* const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", handleFormSubmit); */

/* 5_companies */
/* const companyForm = document.getElementById("company-form");
companyForm.addEventListener("submit", handleFormSubmit); */

/* 6_cities */
/* const cityForm = document.getElementById("city-form");
cityForm.addEventListener("submit", handleFormSubmit); */

/* categories */
/* const categoriesForm = document.getElementById("categories-form");
categoriesForm.addEventListener("submit", handleFormSubmit); */

const testingForm = false;

async function handleFormSubmit(event) {
    debugger
    event.preventDefault();

    const form = event.currentTarget;
    const url = form.action;

    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson({ url, formData });

        if (!testingForm) {
            alert(responseData);
        }
    } catch (error) {
        alert(error);
    }
}

async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    if (testingForm) {
        alert(formDataJsonString);
        return;
    }

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: formDataJsonString,
    };
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return response.text();
}