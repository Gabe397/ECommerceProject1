var tag = document.getElementById(1);
tag.classList.remove("active");


function checkPass(num){
    if(num==4){
        return true
    }

}

function slideshow(num){

    let currentSlide = num;
    var tag = document.getElementById(currentSlide);
    tag.classList.remove("active");

    let nextSlide = num + 1;

    if(checkPass(nextSlide)) {
        nextSlide = 1;
    }

    var addTag = document.getElementById(nextSlide);
    addTag.classList.add("active");

    return nextSlide;
}

slideshow(1);
var counter = 1;
setInterval(function(){
    slideshow(counter);
    counter ++;
    if(checkPass(counter)){
        counter = 1;
    }
    console.log(counter);
    }, 2000);



