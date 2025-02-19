document.getElementById("drawStairs").addEventListener("click", () => {
    let container = document.getElementById("container");
            container.innerHTML = "";
            let ladder = document.createElement("div");
            ladder.className = "ladder";
            container.appendChild(ladder);
            
            for (let i = 0; i < 10; i++) {
                let stair = document.createElement("div");
                stair.className = "stair";
                stair.style.bottom = (i * 25) + "px";
                stair.style.position = "absolute";
                ladder.appendChild(stair);
            }
    let stickFigure = document.getElementById("stickFigure");
    stickFigure.style.display = "block";
    stickFigure.style.bottom = "262px";
    document.getElementById("climbStairs").style.display = "block";
});

document.getElementById("climbStairs").addEventListener("click", () => {
    let stickFigure = document.getElementById("stickFigure");
    let position = 262;
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