let buttonElement = document.querySelector(".js-button");
let bodyElement = document.querySelector(".body");
let themeNameElement = document.querySelector(".js-themeName");

buttonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
    if (bodyElement.classList.contains("dark")) {
        themeNameElement.innerText = "jasny";
    } else {
        themeNameElement.innerText = "ciemny";
    }
});