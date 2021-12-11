  // Thanh navbar
let menu = document.querySelector('#header__icon-bars');
let header__navbar = document.querySelector('.header__navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header__navbar.classList.toggle('active');
}

// Thanh Search

let search  = document.querySelector('.header__search');

document.querySelector('#header__icon-search').onclick = () => {
    search.classList.toggle('active');
}


// Khung đăng nhập

let loginBtn = document.querySelector('#header__icon-users');
let loginForm = document.querySelector('.login-container');
let loginClose = document.querySelector('#login-close');

loginBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

loginClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});


// Giỏ hàng

let shopping  = document.querySelector('.header__shopping');

document.querySelector('#header__icon-shopping-cart').onclick = () => {
    shopping.classList.toggle('active');
}

// Trang chủ

var swiper = new Swiper(".home__container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });


  // Review 

  var swiper = new Swiper(".review__container", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  //Theme
  const themeButton = document.getElementById('theme-btn');
  const darkTheme = 'dark-theme';
  const themeIcon = 'fa-sun';

  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(themeIcon);
  });

//loader

function loader(){
  document.querySelector('.loader__container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 4000);
}

window.onload = fadeOut();
