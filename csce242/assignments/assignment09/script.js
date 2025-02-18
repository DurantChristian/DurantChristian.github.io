document.getElementById("drawLadder").addEventListener("click", () => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    let ladder = document.createElement("div");
    ladder.className = "ladder";
    container.appendChild(ladder);
    
    for (let i = 0; i < 10; i++) {
        let rung = document.createElement("div");
        rung.className = "rung";
        rung.style.bottom = (i * 25) + "px";
        ladder.appendChild(rung);
        
        let stair = document.createElement("div");
        stair.className = "stair";
        stair.style.bottom = (i * 25 + 12) + "px";
        ladder.appendChild(stair);
    }
    
    let stickFigure = document.getElementById("stickFigure");
    container.appendChild(stickFigure);
    stickFigure.style.bottom = "12px";
    document.getElementById("controls").style.display = "block";
    document.getElementById("author").style.marginTop = "10px";
    document.getElementById("controls").appendChild(document.getElementById("author"));
});

document.getElementById("climbLadder").addEventListener("click", () => {
    let stickFigure = document.getElementById("stickFigure");
    let position = 12;
    let step = 25;
    let maxPosition = step * 10;
    let images = ["/csce242/assignments/assignment09/images/left.png", "/csce242/assignments/assignment09/images/right.png"];
    let imgIndex = 0;
    
    let interval = setInterval(() => {
        if (position >= maxPosition) {
            clearInterval(interval);
        } else {
            position += step;
            stickFigure.style.bottom = position + "px";
            stickFigure.src = images[imgIndex % 2];
            imgIndex++;
        }
    }, 500);
});