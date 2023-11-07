let numCelle = 100;
let grid = document.getElementById("grid");
let btnPlay = document.getElementById("btnPlay");
let level = document.getElementById("level");



btnPlay.addEventListener("click", function() {

    for (let i = 1; i <= numCelle; i++) {
        const cella = document.createElement("div");
        cella.classList.add("square");
        grid.appendChild(cella); 
        
        cella.addEventListener("click", function(){
    
            console.log("cella selezionata", i);
            cella.innerHTML = i;
            cella.classList.toggle("highlight");
    
        });
    };
});