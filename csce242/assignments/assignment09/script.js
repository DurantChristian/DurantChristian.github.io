document.getElementById("drawStairs").addEventListener("click", () => {
    let container = document.getElementById("container");
    container.innerHTML = ""; 

    let ladder = document.createElement("div");
    ladder.className = "ladder";
    ladder.style.position = "relative"; 
    container.appendChild(ladder);

    for (let i = 0; i < 10; i++) {
        let stair = document.createElement("div");
        stair.className = "stair";
        stair.style.width = "100%";
        stair.style.height = "5px";
        stair.style.backgroundColor = "black";
        stair.style.position = "absolute";
        stair.style.bottom = (i * 25) + "px";
        ladder.appendChild(stair);
    }

    let stickFigure = document.getElementById("stickFigure");
    stickFigure.style.display = "block";
    stickFigure.style.position = "absolute";
    stickFigure.style.bottom = "12px"; 
    stickFigure.style.left = "50%";
    stickFigure.style.transform = "translateX(-50%)";
    container.appendChild(stickFigure); 

    document.getElementById("climbStairs").style.display = "block";
});

document.getElementById("climbStairs").addEventListener("click", () => {
    let stickFigure = document.getElementById("stickFigure");
    let position = 12; 
    let step = 25; 
    let maxPosition = step * 9; 
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