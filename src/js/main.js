
// $('.intro-box').slick(
//     {dots: true}
// );

// $('.blog-items').slick({
//     infinite: true,
//     dots: true
// });

// $('.quotes-right').slick({
//     infinite: true,
//     dots: true,
//     adaptiveHeight: true
// });

let introBox = document.querySelector(".intro-box");
let flickityOne = new Flickity (introBox, {
    prevNextButtons: false,
    freeScroll: true,
    cellSelector: ".intro-box-item"
})

let blogItmes = document.querySelector(".blog-items");
let flickityTwo = new Flickity (blogItmes, {
    draggable: true,
    freeScroll: true,
    cellAlign: 'center',
    cellSelector: ".blog-item",
    // arrowShape: 'M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z'
})

let quotes = document.querySelector(".quotes-right");
let flickityThree = new Flickity (quotes, {
    prevNextButtons: false,
    draggable: true,
    freeScroll: true,
    cellSelector: ".card"
})

let collapseClick = document.getElementsByClassName("question-heading");

function handleClick() {
    let answer = this.nextElementSibling;
    console.log(this.firstElementChild.src);

    if (answer.style.display === "flex") {
        answer.style.display = "none";
        this.firstElementChild.src = './images/open.svg';
    } else {
        answer.style.display = "flex";
        this.firstElementChild.src = "./images/close.svg";
    }
}

for (let i = 0; i < collapseClick.length; i++) {
    collapseClick[i].addEventListener("click", handleClick, false);
}