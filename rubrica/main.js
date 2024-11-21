let orologio = document.querySelector('.orologio');
let btnShowContacts = document.querySelector('#btnShowContacts');
let btnAddContacts = document.querySelector('#btnAddContacts');
let inputName = document.querySelector('#inputName');
let inputNumber = document.querySelector('#inputNumber');
let contacts_wrapper = document.querySelector('#contacts_wrapper')
let check = false






function aggiornaOrologio() {
  const ora = new Date();
  const oraFormattata = ora.toLocaleString('it-IT', { hour: 'numeric', minute: 'numeric' });
  orologio.textContent = oraFormattata;
  meteo.textContent = oraFormattata;

}

setInterval(aggiornaOrologio, 1000);





const rubrica = {

    contatti: [

        { nome: 'Giuseppe', numero: 33344553 },
        { nome: 'Riccardo', numero: 333454 },
        { nome: 'Matteo', numero: 33344553 },

    ],



    mostraContatti: function () {

        contacts_wrapper.innerHTML = ''
        this.contatti.forEach((contatto) => {

            let div = document.createElement('div');
            div.classList.add('.card')
            div.innerHTML = `
            <p> ${contatto.nome} ${contatto.numero} </p>
            <i class=" iconTrash fa-solid fa-trash-can"></i>
            <i class=" editIcon fa-solid fa-pencil"></i>
            `
            contacts_wrapper.appendChild(div);


        });

        let iconsTrash = document.querySelectorAll('.iconTrash');
        iconsTrash.forEach((icon, i) => {
            icon.addEventListener('click', () => {
                this.contatti.splice(i, 1);
                this.mostraContatti();
            });
        });

        let editIcons = document.querySelectorAll('.editIcon')
        editIcons.forEach((icon, i) => {
            icon.addEventListener('click', () => {
                let newName = prompt('inserisci nuovo nome')
                let newNumber = prompt('inserisci nuovo numero')

                if (newName && newNumber) {

                    this.contatti[i].nome = newName
                    this.contatti[i].numero = newNumber
                    this.mostraContatti()

                } else if (newName != String) {
                    alert('devi inserire un nome')

                } else if (newNumber != Number) {

                        alert('devi inserire un numero')

                }



            });

        })

    },



    aggiungiContatto: function (newName, newNumber) {

        if (newName && newNumber) {

            this.contatti.push({ nome: newName, numero: newNumber });
            this.mostraContatti();
            if (check == false) {

                btnShowContacts.innerHTML = 'Nascondi Contatti'
                check = true

            }
        } else { alert('devi inserire nome e numero di telefono') }

    },




    rimuoviContatto: function (nomeDaRimuovere) {

        let nomi = this.contatti.map((contatto) => contatto.nome)
        let index = nomi.indexOf(nomeDaRimuovere)

        if (index >= 0) {

            this.contatti.splice(index, 1)
            this.mostraContatti()
            inputName.value = ''
            inputNumber.value = ''


            if (check == false) {
                btnShowContacts.innerHTML = 'Nascondi contatti'
                check = true;
            }

        } else { alert('nome non presente in rubrica') }





    }


};


btnShowContacts.addEventListener('click', () => {

    if (check == false) {

        rubrica.mostraContatti();
        btnShowContacts.innerHTML = 'Nascondi contatti'
        check = true;

    } else {

        contacts_wrapper.innerHTML = ''
        check = false
        btnShowContacts.innerHTML = 'Mostra Contatti'


    }


}
)


btnAddContacts.addEventListener('click', () => {

    rubrica.aggiungiContatto(inputName.value, inputNumber.value);
    inputName.value = ''
    inputNumber.value = ''

})



