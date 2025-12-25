/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')


const langToggle = document.querySelector(".lang-toggle");
const langMenu = document.querySelector(".lang-menu");
const langItems = document.querySelectorAll(".lang-menu li");

langToggle.addEventListener("click", () => {
  langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
});

langItems.forEach(item => {
  item.addEventListener("click", () => {
    langItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    langToggle.textContent = item.dataset.lang + " ▾";
    langMenu.style.display = "none";
    // Здесь можешь вызывать функцию смены языка
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang-dropdown")) {
    langMenu.style.display = "none";
  }
});

document.querySelectorAll('.knopka').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});


window.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
});