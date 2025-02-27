document.querySelectorAll(".gallery section").forEach(()=>{
    tile.onclik = () => {
        const label = tile.querySelector("h4").innerHTML;
        const imgSRC = tile.querySelector("img").src;
        document.getElementById("popup").style.display="block";
        document.querySelector("#popup h2").innerHTML = label;
        document.querySelector("#popup img").src = imgSRC;
    }
});