// INSERISCO VARIABILE BTN e ASSEGNO VALORE DOCUMENT //
let btn = document.getElementById("button")

// APRO FUNZIONE E INSERISCO VARIABILI //
btn.addEventListener("click", function () {
    
    let name_surname = document.getElementById("nomeEcognome").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;

// DICHIARO VARIABILI COSTO PER KM PREZZO //
    let cost_km = 0.21;
    let price = cost_km * km;
    let reduction = 0;
// INSERISCO CONDIZIONE IF e ELSE IF //
    if (age == "underage") {
      reduction = 20 / 100;
    }
    else if (age == "over_65") {
      reduction = 40 / 100;
    }

// DICHIARO LE VARIABILI E GLI ASSEGNO VALORE UGUALE A: //
    let discount = (price * reduction).toFixed(2);
    let reduced_price = (price - discount).toFixed(2);

// INSERISCO I PRIMI OUTPUT //
    document.getElementById("passenger").innerHTML = `${name_surname}`
    document.getElementById("cost").innerHTML = `${reduced_price}€`

// INSERISCO I SECONDI OUTPUT CON  TRE CONDIZIONI //
    if (age == "underage") {
        document.getElementById("type_ticket").innerHTML = `Underage`
        document.getElementById("type_discount").innerHTML = `20%`
    } 
    
    else if(age == "over_65") {
        document.getElementById("type_ticket").innerHTML = `Senior`
        document.getElementById("type_discount").innerHTML = `40%`
    } 

    else {
        document.getElementById("type_ticket").innerHTML = `Standard `
        document.getElementById("type_discount").innerHTML = `Nessuno`
    }
});




  