//Chiedo all'utente il suo nome e lo salvo nella variabile "nome"
let nome = prompt("Scrivi quale e il tuo nome", "nome");

//Cerco il paragrafo con id "saluto" e cambio il suo testp com:
//"Ciao" + il nome che ha inserito prima l'utente
document.getElementById("saluto").textContent = "Ciao, " + nome;