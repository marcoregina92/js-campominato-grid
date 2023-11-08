let numCelle = 0;
let grid = document.getElementById("grid");
let btnPlay = document.getElementById("btnPlay");

let level = document.getElementById("level");
level.addEventListener("click", function () {
    console.log("Hai selezionato: ", level.value);
});



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

    for (let i = 1; i <= numCelle; i++) {
        let cella = newCell(i);
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
