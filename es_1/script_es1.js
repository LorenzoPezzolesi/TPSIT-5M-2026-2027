//Es 1
//Prendo il tag h1 che già esiste nella pagina.
//document.getElementById("titolo") prende <h1 id="titolo"> (qui non serve nemmeno usarlo, ma è utile se poi vuoi partire da lì)
//es. inserire gli h2-h6 subito dopo di esso)
const titolo = document.getElementById("titolo");

// Ciclo da 2 a 6 per creare h2, h3, h4, h5, h6
for (let livello = 2; livello <= 6; livello++) { //Il for parte da livello = 2 e arriva a 6, quindi genera i tag h2, h3, h4, h5, h6 uno dopo l'altro.
    const nuovoTag = document.createElement("h" + livello); //document.createElement("h" + livello) crea dinamicamente 
                                                            //l'elemento giusto: quando livello vale 2, la stringa diventa "h2", e così via.
    
    nuovoTag.textContent = "Titolo h" + livello; //nuovoTag.textContent = ... inserisce un testo dentro al tag, così non è vuoto e lo vedi in pagina.
    document.body.appendChild(nuovoTag); //document.body.appendChild(nuovoTag) inserisce il nuovo tag alla fine del <body>, rendendolo visibile.
}
