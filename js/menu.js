function showView(view) {
    var viewToShow = document.getElementById(view);
    hideView();
    
    viewToShow.style.display = 'block';
}

function hideView() {
    var allViews = document.getElementsByClassName('viewContent');
    for(var i = 0; i < allViews.length; i++) {
        allViews[i].style.display = 'none';
    }
}

hideView();