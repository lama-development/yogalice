// Gestione hambuger menu
document.querySelector(".hamburger-menu").addEventListener("click", function () {
    document.querySelector(".first").classList.toggle("a");
    document.querySelector(".second").classList.toggle("b");
    document.querySelector(".third").classList.toggle("c");
})

function burgerClick() {
    document.querySelector(".header-container").classList.toggle("show");
}