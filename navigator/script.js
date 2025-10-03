const heading = document.querySelector('h1');

function status(){
    if(navigator.onLine) {
    heading.textContent = 'You are online';
    heading.style.color = 'green';
}
else{
    heading.textContent = 'You are offline';
    heading.style.color = 'red';
}
}

setInterval(status , 500);

