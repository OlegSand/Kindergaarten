
// let scrollDown = document.getElementsByClassName('scroll-down');

// scrollDown.onclick = function (e) {
//     return document.scr
// }

let showDetails = document.getElementsByClassName('btn-details');

for(let i = 0; i < showDetails.length; i++){
    showDetails[i].addEventListener('click', scrollToDetails, false)
};

function scrollToDetails(e){
    e.preventDefault;
    return window.scrollBy(0, window.pageYOffset);
};