//Es 1
// Prendo il tag h1 che già esiste nella pagina
const titolo = document.getElementById("titolo");

// Ciclo da 2 a 6 per creare h2, h3, h4, h5, h6
for (let livello = 2; livello <= 6; livello++) {
    const nuovoTag = document.createElement("h" + livello); // crea <h2>, <h3>, ecc.
    nuovoTag.textContent = "Titolo h" + livello; // gli mette un testo dentro
    document.body.appendChild(nuovoTag); // lo aggiunge alla pagina
}