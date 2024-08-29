let animal = document.querySelector("#img1");
let nature = document.querySelector("#img2");
let monument = document.querySelector("#img3");

animal.addEventListener("click",() => {
    window.location.href= "animal.html";
    animal.style.border = "5px solid white";
})

nature.addEventListener("click",() => {
    window.location.href= "nature.html";
    animal.style.border = "5px solid white";
})

monument.addEventListener("click",() => {
    window.location.href= "monuments.html";
    animal.style.border = "5px solid white";
})
