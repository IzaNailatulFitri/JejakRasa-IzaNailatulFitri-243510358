// ===============================
// Navbar Effect
// ===============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.style.background = "#084c3d";
        navbar.style.padding = "12px 8%";
    } else {
        navbar.style.background = "#0b5d4b";
        navbar.style.padding = "18px 8%";
    }
});

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===============================
// Animasi Saat Scroll
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

},{
    threshold:0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);

});

// ===============================
// Efek Hover Card
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 20px 40px rgba(0,0,0,.25)";
        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";
        card.style.transform = "translateY(0) scale(1)";

    });

});

// ===============================
// Efek Klik Menu Navbar
// ===============================

const menu = document.querySelectorAll("nav ul li a");

menu.forEach(link => {

    link.addEventListener("click", function(){

        menu.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

// ===============================
// Efek Hero
// ===============================

const heroTitle = document.querySelector(".hero h1");
const heroText = document.querySelector(".hero p");
const heroBtn = document.querySelector(".btn");

window.addEventListener("load", () => {

    heroTitle.style.opacity = "0";
    heroText.style.opacity = "0";
    heroBtn.style.opacity = "0";

    heroTitle.style.transform = "translateY(-30px)";
    heroText.style.transform = "translateY(30px)";
    heroBtn.style.transform = "scale(.8)";

    setTimeout(() => {
        heroTitle.style.transition = ".8s";
        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";
    },200);

    setTimeout(() => {
        heroText.style.transition = ".8s";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
    },500);

    setTimeout(() => {
        heroBtn.style.transition = ".8s";
        heroBtn.style.opacity = "1";
        heroBtn.style.transform = "scale(1)";
    },800);

});

// ===============================
// Efek Zoom Galeri
// ===============================

const gallery = document.querySelectorAll(".gallery img");

gallery.forEach(img=>{

    img.addEventListener("click",()=>{

        img.style.transform="scale(1.12)";

        setTimeout(()=>{
            img.style.transform="scale(1)";
        },300);

    });

});

// ===============================
// Console Message
// ===============================

console.log("🍽️ Selamat Datang di Website Kuliner Tradisional Melayu");