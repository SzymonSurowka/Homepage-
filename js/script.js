{
    const welcome = () => {
        console.log("Witam wszystkich developerów");
    }

    const toggleBackground = () => {
        const bodyElement = document.querySelector(".body");
        const themeNameElement = document.querySelector(".js-themeName");

        bodyElement.classList.toggle("dark");
        if (bodyElement.classList.contains("dark")) {
            themeNameElement.innerText = "jasny";
        } else {
            themeNameElement.innerText = "ciemny";
        }
    }

    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        buttonElement.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}