'use strict';

var showDetails = document.getElementsByClassName('btn-details');

for (var i = 0; i < showDetails.length; i++) {
    showDetails[i].addEventListener('click', scrollToDetails, false);
};

function scrollToDetails(e) {
    e.preventDefault;
    var windHeight = document.documentElement.clientHeight;
    window.scrollTo({ top: windHeight, left: 0, behavior: 'smooth' });
};