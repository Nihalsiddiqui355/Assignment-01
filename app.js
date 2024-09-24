let menu = document.querySelector(".hamburger");
let navbar = document.querySelector(".mobile-nav");
let menuIcon = menu.querySelector(".material-symbols-outlined");


const useCasesIcon = document.getElementById('use-cases-icon');
const useCasesContent = document.getElementById('use-cases-content');
const businessIcon = document.getElementById('business-icon');
const businessContent = document.getElementById('business-content');

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





// Toggle accordion for "Use Cases"
useCasesIcon.addEventListener('click', function () {
    if (useCasesContent.style.display === 'none' || !useCasesContent.style.display) {
        useCasesContent.style.display = 'block';
        useCasesIcon.textContent = 'expand_less';
    } else {
        useCasesContent.style.display = 'none';
        useCasesIcon.textContent = 'expand_more';
    }
});

// Toggle accordion for "For Business"
businessIcon.addEventListener('click', function () {
    if (businessContent.style.display === 'none' || !businessContent.style.display) {
        businessContent.style.display = 'block';
        businessIcon.textContent = 'expand_less';
    } else {
        businessContent.style.display = 'none';
        businessIcon.textContent = 'expand_more';
    }
});