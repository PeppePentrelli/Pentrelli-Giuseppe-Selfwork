
// Primo Bottone 

let changeColor = document.querySelector('.changeColor')
changeColor.addEventListener('click', () => {
    function coloriCasuali() {
        let rosso = Math.floor(Math.random() * 255 + 1);
        let verde = Math.floor(Math.random() * 255 + 1);
        let blu = Math.floor(Math.random() * 255 + 1);
        return `rgb(${rosso}, ${verde}, ${blu})`;

    }

    let paragrafi = document.querySelectorAll('p');

    paragrafi.forEach(p => {
        p.style.color = coloriCasuali();
        changeColor.style.backgroundColor = coloriCasuali();
        changeColor.style.color = coloriCasuali();



    });
});


// Secondo bottone


let check = false
let strongText = document.querySelector('.strongText')
strongText.addEventListener('click', () => {

    paragrafi.forEach(p => {

        p.classList.toggle('classe2')



    })
})


// Terzo bottone : fa scomparire il testo

let paragrafi = document.querySelectorAll('p')
let disappearText = document.querySelector('.disappearText')

disappearText.addEventListener('click', () => {


    paragrafi.forEach(p => {

        p.classList.toggle('classe3')

    });


})

