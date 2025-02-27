setInterval(()=>{
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    const nextSlide = currentSlide.nextElementSibling;
    if(nextSlide == null) {
        nextSlide = document.querySelector("#slideshow :first-child");
    }

    currentSlide.classList.add("hidden");
    currentSlide.classList.remove("hidden");
},1000);