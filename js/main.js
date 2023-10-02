const pages = document.querySelector("header .pages");
pages.classList.add("hidden");
pages.classList.add("op-0");

document.querySelector("header .p-links").addEventListener("click", function () {
    fade(pages, "op-0", 250, "hidden");
});

// element must be selected and passed to the function
// className must be a string
// duration is in milliseconds
// hideClass is optional
function fade (element, className, duration, hideClass) {
    if (hideClass) {
        toggleHide(element, hideClass, duration);
    }
    if (element.classList.contains(className)) {
        element.style.opacity = '0';
        for (let i=0; i<=100; i++) {
            setTimeout(function () {
                element.style.opacity = `${i/100}`;
            }, duration*i/100);
        }
    }
    else {
        element.style.opacity = '1';
        for (let i = 100; i>=0; i--) {
            setTimeout(function() {
                element.style.opacity = `${i/100}`;
            }, duration*(1 - (i-1)/100));
        }
    }
    element.classList.toggle(className);
}

function toggleHide (element, className, duration) {
    if (element.classList.contains(className)) {
        duration = 0;
    }
    setTimeout(() => {
        element.classList.toggle(className);
    }, duration);
}


// Testimonials Slider
const leftSlider = document.querySelector(".clients .l-arw");
const rightSlider = document.querySelector(".clients .r-arw");

if (leftSlider) {

    const testimonialWriter = document.querySelectorAll(".clients .writer");
    testimonialWriter.forEach((element) => {
        element.classList.add("op-0");
        element.classList.add("hidden");
    });
    testimonialWriter[0].classList.remove("op-0");
    testimonialWriter[0].classList.remove("hidden");
    let i = 0;
    
    rightSlider.addEventListener("click", function () {
        fade(testimonialWriter[i], "op-0", 0);
        toggleHide(testimonialWriter[i], "hidden", 0)
        if ( i == testimonialWriter.length - 1 ) {
            i = -1;   
        }
        fade(testimonialWriter[i+1], "op-0", 250);
        toggleHide(testimonialWriter[i+1], "hidden", 250);
        i++;
    });
    
    leftSlider.addEventListener("click", function () {
        fade(testimonialWriter[i], "op-0", 0);
        toggleHide(testimonialWriter[i], "hidden", 0)
        if ( i == 0 ) {
            i = testimonialWriter.length;   
        }
        fade(testimonialWriter[i-1], "op-0", 250);
        toggleHide(testimonialWriter[i-1], "hidden", 250);
        i--;
    });
}



if (window.innerWidth < 768 && document.querySelector("header .m-menu")) {
    const menu = document.querySelector("header .m-menu");
    menu.classList.add("hidden-imp");
    menu.classList.add("op-0");
    document.querySelector("header .menu").addEventListener("click", () => {
        fade(menu, "op-0", 250, "hidden-imp");
    });
}



function changeAnswer() {
    const choice = document.querySelectorAll(".choice > div");
    const answer = document.querySelectorAll(".answer > div");

    for (let i=0; i<choice.length; i++) {
        if (choice[i] == event.currentTarget) {
            choice[i].querySelector("span").className = "font-bold";
            answer[i].classList.remove("hidden");
        } else {
            choice[i].querySelector("span").className = "underline";
            answer[i].classList.add("hidden");
        }
    }
}



function showMore() {
    const allChoices = document.querySelectorAll(".m-choice > div");

    const current = event.currentTarget;
    const classes = current.className.split(" ");

    const currentSign = current.querySelector("span:first-child");
    const currentDiv = current.parentElement.querySelector("div");


    for (let i=0; i<allChoices.length; i++) {
        const choiceParagraph = allChoices[i].querySelector("p");
        const choiceSign = choiceParagraph.querySelector("span:first-child");
        const choiceDiv = allChoices[i].querySelector("div");

        if (choiceParagraph == event.currentTarget) {
            if (choiceSign.innerText === "+") {
                choiceSign.innerText = "-";
            }
            choiceDiv.classList.remove("hidden");
        } else {
            if (choiceSign.innerText === "-") {
                choiceSign.innerText = "+";
            }
            choiceDiv.classList.add("hidden");
            choiceParagraph.classList.remove("active");
        }
    }


    
    if (classes[classes.length-1] == "active") {
        current.classList.remove("active");

        if (currentSign.innerText === "-") {
            currentSign.innerText = "+";
        }
        currentDiv.classList.add("hidden");
    } else {
        current.classList.add("active");

        if (currentSign.innerText === "+") {
            currentSign.innerText = "-";
        }
        currentDiv.classList.remove("hidden");
    }

}