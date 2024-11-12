let buttonCustom = document.querySelector('#buttonCustom')
let textAreaCustom = document.querySelector('#textAreaCustom')
let inputCustom = document.querySelector('#inputCustom')


buttonCustom.addEventListener('click', () => {


    
    if (textAreaCustom.value !== '' && inputCustom.value !== '' ) {
    
        let paragrafo = document.createElement('p')
        let textArea = textAreaCustom.value
        let titolo = inputCustom.value
            console.log(textAreaCustom.value);
            console.log(inputCustom.value);
            let date = new Date();
            let formatDate = date.toLocaleDateString()


        
            let content = ` Titolo: ${titolo} <br> ${textArea} 
<br> ${formatDate}`;
            console.log(content);
            paragrafo.innerHTML = content;
            document.body.appendChild(paragrafo)
        textAreaCustom.value = ''
        inputCustom.value = ''

    } else if (textAreaCustom.value === '' && inputCustom.value === '' ) {


        alert('Devi inserire un titolo e un testo per creare un paragrafo')
 
       
    } 

}

)

