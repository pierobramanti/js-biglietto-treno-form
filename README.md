Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno-form
Descrizione: Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Questo è il primo esercizio suddiviso per milestone, quindi seguite le milestone nell'ordine: non passate alla successiva se non avete fatto la precedente
Numero minimo di push: 10
MILESTONE 0: Creare il file README.md
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

SCOMPOSIZIONE ESERCIZIO
1 Inserisco un input che chieda il numero di km che si desidera percorrere
2 Inserisco un input che chieda l'età dell'utente
3 Inserisco un bottone che attivi il calcolo del prezzo
4 Creo una variabile per recuperare dati immessi dall'utente negli input 
5 Creo una variabile a cui assegno come valore il prezzo del biglietto per km(0.21 €) 
6 Dichiaro una variabile a cui assegno un valore uguale al prezzo per km moltiplicato per i km percorsi 
7 Dichiaro una variabile let per lo sconto con assegnazione di valore uguale a "0".
8 SE il passeggero ha meno di 18 anni assegno come valore della variabile una riduzione del biglietto del 20%
9 SE INVECE il passeggero ha 65 anni o più assegno come valore della variabile una riduzione del biglietto del 40% 
10 Dichiaro una variabile che calcoli lo sconto, moltiplicando il costo del biglietoo per la riduzione 
11 Dichiaro una variabile che calcoli lo sconto, sottraendo al prezzo il valore dello sconto 
12 Utilizzo metodo toFixed() per mostrare solo due decimali dopo la virgola 
13 Aggiungo con la proprietà innerHTML i dati inseriti dall'utente e il costo del biglietto.