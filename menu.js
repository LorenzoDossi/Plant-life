const toggleMenu = document.querySelector("a.toggle-nav");
const main = document.querySelector("main");

toggleMenu.addEventListener("click", function() {
    main.classList.toggle("open");
    
    if (main.classList.contains("open")) {
        toggleMenu.innerHTML = `<img src="./assets/close.svg" alt="M"> Close`
    } else {
        toggleMenu.innerHTML = `<img src="./assets/menu.svg" alt="M"> Open`
    }

})