document.getElementById("drawStairs").addEventListener("click", () => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        let stair = document.createElement("div");
        stair.className = "stair";
        container.appendChild(stair);
    }
    let stickFigure = document.getElementById("stickFigure");
    stickFigure.style.display = "block";
    stickFigure.style.bottom = "0px";
    document.getElementById("climbStairs").style.display = "block";
});

document.getElementById("climbStairs").addEventListener("click", () => {
    let stickFigure = document.getElementById("stickFigure");
    let position = 0;
    let step = 25;
    let maxPosition = step * 10;
    let images = ["left.png", "right.png"];
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