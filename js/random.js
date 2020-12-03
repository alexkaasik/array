const mainimage = document.querySelector("#img");
const button = document.querySelector(".btn");

const images = [`img/pic1.jpg`,`img/pic2.jpg`,`img/pic3.jpg`,`img/pic4.jpg`];

button.addEventListener(`click`,()=> {
    console.log("sup hu-man-zzz");

    let rnd =Math.floor(Math.random() * images.length);
    mainimage.src = images[rnd];
    console.log("Random number:",rnd);
});