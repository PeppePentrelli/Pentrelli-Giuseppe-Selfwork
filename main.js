let chronoInput = document.querySelector('#chronoInput');
let btnStartCustom = document.querySelector('#btnStartCustom');
let btnPauseCustom = document.querySelector('#btnPauseCustom');
let btnRestartCustom = document.querySelector('#btnRestartCustom');
let display = document.querySelector('#display');
let errorMessage = document.querySelector('#errorMessage'); 
let on = document.querySelector('#on')

let intervallo;
let secondiRimasti;



btnStartCustom.addEventListener('click', () => {
    secondiRimasti = parseInt(chronoInput.value);

    if (secondiRimasti > 0) { 
        clearInterval(intervallo); 
        intervallo = setInterval(() => {
            secondiRimasti--;
            display.textContent = secondiRimasti;
            if (secondiRimasti === 0) {
                clearInterval(intervallo);
                display.textContent = '00.00';
            }
        }, 1000);

    } else {
        errorMessage.textContent = "inserisci i secondi con un numero intero positivo";
    }
});

btnPauseCustom.addEventListener('click', () => {
    clearInterval(intervallo);
});

btnRestartCustom.addEventListener('click', () => {
    clearInterval(intervallo);
    chronoInput.value = '';
    display.textContent = '0';
    secondiRimasti = 0;

});

prova = document.querySelector('.prova')


