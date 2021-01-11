import { getDataAsJson } from './formService.js';

function showView(view) {
    var viewToShow = document.getElementById(view);
    hideView();

    viewToShow.style.display = 'block';
    /* View table */
    let response = getDataAsJson('http://127.0.0.1:3000/users');
    debugger
    console.log(response);
}

function hideView() {
    var allViews = document.getElementsByClassName('viewContent');
    for (var i = 0; i < allViews.length; i++) {
        allViews[i].style.display = 'none';
    }
}

hideView();