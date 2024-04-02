
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector("button.pre");
let slide = document.querySelector("button.show");
let stopButton = document.querySelector("button.stop");
let img = document.querySelector("img");
let counter = 1;

nextButton.addEventListener("click", function () {
    if (counter < 8) {
        counter++;
    } else {
        counter = 1;
    }

    img.setAttribute("src", `images/${counter}.jpg`);
});



prevButton.addEventListener("click", function () {
    if (counter > 0) {
        counter--;

    } else {
        counter = 6;
    }
    img.setAttribute("src", `images/${counter}.jpg`);


});


var sliderInterval;
slide.addEventListener("click", slider);
function slider() {
    sliderInterval = setInterval(count, 1000);
    function count() {
        if (counter < 6) {
            counter++;

        } else {
            counter = 1;
        };
        img.setAttribute("src", `images/${counter}.jpg`);

    }


}

console.log(stopButton);

stopButton.addEventListener("click", function () {
    clearInterval(sliderInterval);
    console.log("stop");
});


/////////////////////////////////




