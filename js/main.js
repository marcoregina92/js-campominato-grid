let numCelle = 100;
let grid = document.getElementById("grid");

for (let i = 1; i <= numCelle; i++) {
    const cella = document.createElement("div");
    cella.classList.add("square");
    cella.innerHTML = i;
    grid.appendChild(cella); 
    
    cella.addEventListener("click", function(){

        console.log("cella selezionata", i);
        cella.classList.toggle("highlight")

    })
};