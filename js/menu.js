import { getDataAsJson } from './formService.js';

const mainView = document.querySelectorAll('.main-view');
mainView.forEach(view => {
    const viewName = view.getAttribute('data-view');
    view.addEventListener('click', () => showView(viewName));
});

async function showView(view) {
    var viewToShow = document.getElementById(view);
    hideView();

    viewToShow.style.display = 'block';

    /* View table */
    const url = 'http://127.0.0.1:3000/' + view;
    let dataList = await getDataAsJson(url);

    const table = drawTable(dataList);
    const listName = "list-" + view;
    const list = document.getElementById(listName);

    list.innerText = '';
    list.append(table);
}

function drawTable(dataList) {
    const table = document.createElement("table");

    dataList.forEach((item) => {
        const tr = document.createElement("tr");
        const values = Object.values(item)
        values.forEach((value) => {
            const td = document.createElement("td");
            td.innerText = value;
            tr.append(td);
        });

        table.append(tr);
    });

    return table;
}

function hideView() {
    var allViews = document.getElementsByClassName('viewContent');
    for (var i = 0; i < allViews.length; i++) {
        allViews[i].style.display = 'none';
    }
}

hideView();