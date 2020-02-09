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

    return nextSlide;
}

var counter = 1;
setInterval(function(){
    slideshow(counter);
    counter ++;
    if(counter == 4){
        counter = 1;
    }
    console.log(counter);
    }, 3000);



