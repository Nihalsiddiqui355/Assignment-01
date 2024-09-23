let menu = document.querySelector(".hamburger");
let navbar = document.querySelector(".mobile-nav");
let menuIcon = menu.querySelector(".material-symbols-outlined");

menu.addEventListener("click", function () {
    console.log("hi");
    navbar.classList.toggle("active");
    if (navbar.classList.contains("active")) {
        menuIcon.textContent = "close"; 
        menu.style.backgroundColor = "rgb(86, 90, 221)"; 
        menuIcon.style.color = "#fff";
    } else {
        menuIcon.textContent = "menu";
        menu.style.backgroundColor = "rgb(240, 241, 255)"; 
        menuIcon.style.color = "rgb(86, 90, 221)";
    }
});

window.onscroll = () => {
    navbar.classList.remove("active");
};


