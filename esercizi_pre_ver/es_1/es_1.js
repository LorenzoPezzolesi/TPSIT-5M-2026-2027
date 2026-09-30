//Inizializzo a 0 le variabiki
let presenti = 0;
let capienza = 0;

//estraggo le cose che mi servono
let btnAdd = document.getElementById("bottone_Ingresso");
let btnDec = document.getElementById("bottone_Uscita");
let numDiv = document.getElementById("numero");

//funzione che incrementa il valore dei presenti
function increment(){
    presenti += 1;
    //il commento qui sotto
    // numDiv.innerHTML = "<a href=\"https://google.com\">Ciao</a>" 
    numDiv.textContent = presenti;

    if (presenti < 0) {
        console.log("Non ci sono persone presenti")
    } else {
        console.log("ce almeno una persona")
    }


}

//funzione che decrementa il valore dei presenti
function decrement(){
    presenti -= 1;
    numDiv.textContent = presenti;
}

//le seguenti righe di codice sarebbero come la funzione madre "def main" 
//dove in python eseguivo tutte le funzioni
//le seguenti righe di codice permettono di:
//se clicchi btnAdd-> incrementa 
//se clicchi btnDec -> decrementa
btnAdd.addEventListener("click", increment);
btnDec.addEventListener("click", decrement);