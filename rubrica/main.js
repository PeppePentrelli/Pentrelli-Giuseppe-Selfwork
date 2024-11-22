let orologio = document.querySelector('.orologio');
let btnShowContacts = document.querySelector('#btnShowContacts');
let btnAddContacts = document.querySelector('#btnAddContacts');
let inputName = document.querySelector('#inputName');
let inputNumber = document.querySelector('#inputNumber');
let contacts_wrapper = document.querySelector('#contacts_wrapper')
let check = false
let btnDeleatContacts = document.querySelector('#btnDeleatContacts')
let btnEditContacts = document.querySelector('#btnEditContacts')




function aggiornaOrologio() {
  const ora = new Date();
  const oraFormattata = ora.toLocaleString('it-IT', { hour: 'numeric', minute: 'numeric' });
  orologio.textContent = oraFormattata;

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
            `
            contacts_wrapper.appendChild(div);


        });

        let iconsTrash = document.querySelectorAll('.iconTrash');
        iconsTrash.forEach((icon, i) => {
            icon.addEventListener('click', () => {
                this.contatti.splice(i, 1);
campoAllert.innerHTML= `contatto eliminato`

                this.mostraContatti();
            });
        });

    },


    modificaContatto : function (newNome,newNumero) {

        this.contatti.forEach((contatto) => { 

            if (contatto.nome == newNome ) { 

contatto.numero = newNumero
this.mostraContatti()
if (contatto) {
    contatto.numero = newNumero;
    this.mostraContatti();
    campoAllert.innerHTML= `${contatto.nome} modificato con successo!!!`
  }
  
  else if (contatto == '') {

        campoAllert.innerHTML= `devi inserire un contatto per elimniarlo`
    
  } else if (contatto =! contatto.nome) {

    campoAllert.innerHTML= "Contatto non trovato";
  }



                
            }
        })
        
    },


    aggiungiContatto: function (newName, newNumber) {

        if (newName && newNumber) {

            this.contatti.push({ nome: newName, numero: newNumber });
            this.mostraContatti();
            if (check == false) {

                btnShowContacts.innerHTML = 'Nascondi Contatti'
                check = true
                campoAllert.innerHTML= `${newName} aggiunto`

            }
        } else { campoAllert.innerHTML= 'Attenzione devi inserire un nome e un numero' 
            
            


        }

    },



    rimuoviContattoInput : function(remove) {


let filtra = this.contatti.filter(contatto => contatto.nome != remove)
this.contatti = filtra

if (remove == '') { 
    campoAllert.innerHTML= `devi inserire un contatto per elimniarlo`
    
    
} else { 
    campoAllert.innerHTML= `${remove} eliminato`

}


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





btnDeleatContacts.addEventListener('click', () => {

   if ( inputName != '') {

    rubrica.rimuoviContattoInput(inputName.value)
    inputName.value = ''
    rubrica.mostraContatti();

   }

});



btnEditContacts.addEventListener('click' ,() => { 

    if (inputName.value != '') {
        
        rubrica.modificaContatto(inputName.value,inputNumber.value)
        inputName.value =''
    inputNumber.value=''
    rubrica.mostraContatti()
    } else { 
    campoAllert.innerHTML= 'Attenzione devi inserire un contatto prima di modificare' 

    }

})