// INSERISCO VARIABILE BTN e ASSEGNO VALORE DOCUMENT //
const btn = document.getElementById("button")

// APRO FUNZIONE E INSERISCO VARIABILI //
btn.addEventListener("click", function () {
    
    let name_surname= document.getElementById("nomeEcognome").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;

// DICHIARO VARIABILI COSTO PER KM PREZZO
    let cost_km = 0.21;
    let price = cost_km * km;
    let reduction = 0;
// INSERISCO CONDIZIONE IF e ELSE IF
    if (age === "underage") {
      reduction = 20 / 100;
    }
    else if (age === "over_65") {
      reduction = 40 / 100;
    }
}