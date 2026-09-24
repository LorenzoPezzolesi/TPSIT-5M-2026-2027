//Esercizio A: L'aggiungi-link dinamico
//Crea un elenco puntato vuoto (<ul>) nel tuo HTML.
//Usa due prompt in JavaScript: uno per chiedere all'utente il nome di un sito web e uno per chiedere l' URL (es. https://...).
//Crea dinamicamente un nuovo elemento elenco (<li>) che contiene un link con il nome e l'indirizzo inseriti, e aggiungilo alla lista.


let nome_sito = prompt("Scrivi il nome di un sito web", "nome sito")
let nome_sito = prompt("Scrivi l'URL del sito web", "https://")

let input1 = document.getElementById("input1")
let numero = parseInt(input1.value) //int python

document.createElement("li")