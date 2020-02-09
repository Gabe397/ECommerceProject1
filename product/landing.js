function slideshow(num){

    let currentSlide = num;
    var tag = document.getElementById(currentSlide);
    tag.classList.remove("active");

    let nextSlide = num + 1;

    if(nextSlide == 4) {
        nextSlide = 1;
    }

    var addTag = document.getElementById(nextSlide);
    addTag.classList.add("active");

}


setInterval(slideshow(2), 3000);

