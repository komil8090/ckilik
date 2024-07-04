let buttonplus = document.querySelector(".plusBtn")
let buttonminus = document.querySelector(".minusBtn")
let p = document.querySelector("p");

buttonplus.addEventListener("click", function () {
    p.textContent = Number(p.textContent + 1);
})

buttonminus.addEventListener("clic", function ( ) {
    p.textContent = Number(p.textContent - 1);
}) 
