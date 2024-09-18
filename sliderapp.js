const leftarrow = document.querySelector(".left");
const rightarrow = document.querySelector(".right");
const slider = document.querySelector(".sliderdiv");
const images = document.querySelectorAll(".images");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const imagesLenght = images.length;

for(let i =0; i < imagesLenght; i++){
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const ResetBg = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = "transparent";
    });
};


buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        ResetBg();
        slider.style.transform = `translateX(-${i * 800}px)`;
        button.style.backgroundColor = "white";
        slideNumber = i + 1;
    });
});


const nextslide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
}

const Prevslide = () => {
    const index = slideNumber - 2;
    slider.style.transform = `translateX(-${index * 800}px)`;
    slideNumber--;
}

const getFirstslide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

const getLastslide = () => {
    const index = imagesLenght - 1;
    slider.style.transform = `translateX(-${index * 800}px)`;
    slideNumber = imagesLenght;
}

const ChangeColor = () => {
    ResetBg();
    buttons[slideNumber - 1].style.backgroundColor = "white";
};


leftarrow.addEventListener('click', () => {
    slideNumber > 1 ? Prevslide() :  getLastslide();
    ChangeColor();
})

rightarrow.addEventListener('click', () => {
    slideNumber < imagesLenght ? nextslide() :  getFirstslide();
    ChangeColor();
})

