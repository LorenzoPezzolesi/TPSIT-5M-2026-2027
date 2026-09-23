// Prendo tutti gli elementi <li> della pagina e li salvo nella variabile "elementi"
let elementi = document.querySelectorAll("li");

// Il secondo elemento (Latte) ha posizione 1 (perché si inizia a contare da 0) e poi ne sostituisco il testo
elementi[1].textContent = "Cioccolato";