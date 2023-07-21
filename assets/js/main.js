/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll("header .nav-link");
const linkActive = () => {
  let navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkActive));

/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects-container', {
  // Optional parameters
  loop: true,
  spaceBetween: 24,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.testimonial-container', {
  // Optional parameters
  grabCursor: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*=============== EMAIL JS ===============*/


// Scroll With Active Link
let sections = document.querySelectorAll(".home, .skills, .qualification, .services, .projects, .contact");
let navLinks = document.querySelectorAll("header .nav-link");

window.onscroll = () => {
  sections.forEach(section => {
    let id = section.getAttribute("id");
    if (window.scrollY >= section.offsetTop - 150 && window.scrollY < section.offsetTop - 150 + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector(`header .nav-link[href*= "${id}"]`).classList.add("active");
      });
    }
  });
}

// Scroll To Top
let scrollToTop = document.querySelector(".scroll-to-top");
let btn = document.querySelector(".up");

document.addEventListener("scroll", function() {
    if (window.scrollY >= 600) {
      scrollToTop.style.opacity = "1";
      scrollToTop.style.display = "block";
    } else {
      scrollToTop.style.opacity = "0";
      scrollToTop.style.display = "none";
    }
})

btn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/*=============== DARK LIGHT THEME ===============*/ 
let changeTheme = document.querySelector(".change-theme");
// console.log(changeTheme);
changeTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

