let climbIndex = 0;
let images = ["../../../images/left.png", "../../../images/right.png"];
let imageIndex = 0;
let climbingInterval;

document.getElementById("draw-btn").addEventListener("click", () => {
    let container = document.getElementById("ladder-container");
    container.innerHTML = '<div class="side-rail left-rail"></div><div class="side-rail right-rail"></div>';
    container.classList.add("ladder-visible");
    
    for (let i = 0; i < 10; i++) {
        let rung = document.createElement("hr");
        rung.className = "rung";
        container.appendChild(rung);
    }
    
    let stickFigure = document.getElementById("stick-figure");
    stickFigure.classList.add("stick-visible");
    stickFigure.style.backgroundImage = `url(${images[0]})`;
    
    document.getElementById("climb-btn").style.display = "inline";
});

document.getElementById("climb-btn").addEventListener("click", () => {
    let stickFigure = document.getElementById("stick-figure");
    let rungs = document.querySelectorAll(".rung");
    let container = document.getElementById("ladder-container");
    climbIndex = 0;
    clearInterval(climbingInterval);
    stickFigure.style.bottom = "5px";
    
    climbingInterval = setInterval(() => {
        if (climbIndex >= rungs.length) {
            clearInterval(climbingInterval);
            setTimeout(() => {
                stickFigure.style.bottom = "5px";
            }, 500);
            return;
        }
        
        stickFigure.style.bottom = `${climbIndex * (container.clientHeight / rungs.length)}px`;
        stickFigure.style.backgroundImage = `url(${images[imageIndex]})`;
        imageIndex = 1 - imageIndex;
        climbIndex++;
    }, 500);
});
