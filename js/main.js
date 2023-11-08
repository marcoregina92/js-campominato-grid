//***** Definisco le costanti globali che userò ****

let numCelle = 0;
let grid = document.getElementById("grid");
let btnPlay = document.getElementById("btnPlay");

// **** Imposto il livello di difficoltà da scegliere ****

let level = document.getElementById("level");
level.addEventListener("change", function () {
    console.log("Hai selezionato: ", level.value);
});

//**** Aggiungo l'evento quando si clicca sul button e in base alla difficoltà cambio il numero di celle da impostare ***
btnPlay.addEventListener("click", function () {
    if (level.value == "medium") {
        numCelle = 81;
        grid.innerHTML = "";
    } else if (level.value == "hard") {
        numCelle = 49;
        grid.innerHTML = "";
    } else {
        numCelle = 100;
        grid.innerHTML = "";
    }
    console.log(numCelle);
    console.log(level);

    let celleBomba = [];
    while (celleBomba.length < 16) {
        let random = randomNumber(1, numCelle);
        if(celleBomba.indexOf(random) === -1) {
        celleBomba.push(random);
       }
    }
    console.log(`Celle bomba: ${celleBomba}`);




    for (let i = 1; i <= numCelle; i++) {
        let cella = newCell(i, celleBomba);
        grid.appendChild(cella);
        grid.appendChild(cella);
        if (numCelle == 81) {
            cella.classList.add("medium");
        } else if (numCelle == 49) {
            cella.classList.add("hard");
        }
    }
});

function newCell(numero) {
    const cella = document.createElement("div");
    cella.classList.add("square");


    cella.addEventListener("click", function () {

        console.log("cella selezionata", numero);
        cella.innerHTML = [numero];
        cella.classList.toggle("highlight");
    });

    return cella;
};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }