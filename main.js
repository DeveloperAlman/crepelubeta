const logo = document.querySelectorAll('#logo path');

for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

window.onload = function () {
    document.body.classList.add('preloader');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('preloader');
    }, 3500);
}