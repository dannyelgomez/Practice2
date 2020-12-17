const links = document.querySelectorAll('.link');

links.forEach((link) => {
    link.addEventListener('click', executeEvents);
});

function executeEvents(event) {
    getList(event);
    setSubmitEvent(event);
}

function setSubmitEvent(event) {
    const formName = event.currentTarget.getAttribute('data-form');
    setTimeout(() => {
        const form = document.getElementById(formName);
        form.addEventListener("submit", handleFormSubmit);
    }, 3000);
}

const testingForm = false;

async function handleFormSubmit(event) {
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

async function getList(event) {
    // const formName = event.currentTarget.getAttribute('data-form');
    const servicePath = event.currentTarget.getAttribute('data-service');

    const fetchOptions = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    };

    const response = await fetch(`http://127.0.0.1:3000/${servicePath}`, fetchOptions);
    const rows = await response.json();

    const title = 'User';
    const headers = ['Id', 'User Name', 'Password', 'First Name', 'Last Name', 'Email', 'Role', 'Is Active'];

    const tableString = createTable(title, headers, rows);

    setTimeout(() => {
        const currentList = document.getElementById("list");
        currentList.innerHTML = tableString;
    }, 2000);
};

function createTable(title, headers, rows) {
    const fields = Object.keys(rows[0]);

    const titleTemplate = `<caption>${title}</caption>`;
    const tableHeadTemplate = `
    <thead>
      <tr>
        ${headers.map(header => `<th scope="col">${header}</th>`).join(' ')}
      </tr>
    </thead>`;
  
    let tableBodyTemplate = `
    <tbody>
      ${rows.map(row => `<tr>${fields.map(field => `<td>${row[field]}</td>`).join(' ')}</tr>`).join(' ')}
    <tbody>`;
  
  const tableTemplate = `
    <table class="table caption-top">
      ${titleTemplate}
      ${tableHeadTemplate}
      ${tableBodyTemplate}
    </table>`;
  
  return tableTemplate;
};