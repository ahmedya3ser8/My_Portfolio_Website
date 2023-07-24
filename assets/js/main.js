// SHOW MENU
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

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll("header .nav-link");
const linkActive = () => {
  let navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkActive));

// SWIPER PROJECTS
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

// DARK LIGHT THEME
let ThemeButton = document.querySelector(".change-theme");
let darkTheme = 'dark-theme';

const selectedTheme = localStorage.getItem('selected-theme');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}

ThemeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  // Save the theme and icon in localStorage
  localStorage.setItem('selected-theme', getCurrentTheme());
});

// CHANGE BACKGROUND HEADER
let header = document.querySelector("header");
document.addEventListener("scroll", () => {
  if (window.scrollY >= 250) {
    header.classList.add("bg-header");
  } else {
    header.classList.remove("bg-header");
  }
});

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal('.home-data, .projects-container, .testimonial-container, .footer-container')
sr.reveal('.home-info div', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('.skills-content:nth-child(1), .contact-content:nth-child(1)', {origin: 'left'})
sr.reveal('.skills-content:nth-child(2), .contact-content:nth-child(2)', {origin: 'right'})
sr.reveal('.qualification-content, .services-card', {interval: 100})