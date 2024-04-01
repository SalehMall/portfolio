//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {  
        header.classList.remove('navbar-fixed');
    }
    
};


// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');  
    navMenu.classList.toggle('hidden'); 
});

//typing

document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.getElementById('about');
    const portfolioSection = document.getElementById('portfolio');
    const clientsSection = document.getElementById('clients');
    const blogSection = document.getElementById('blog');
  
    // Inisialisasi ScrollReveal untuk setiap bagian
    ScrollReveal().reveal(aboutSection, getScrollRevealConfig());
    ScrollReveal().reveal(portfolioSection, getScrollRevealConfig());
    ScrollReveal().reveal(clientsSection, getScrollRevealConfig());
    ScrollReveal().reveal(blogSection, getScrollRevealConfig());
  
    // Tambahkan event listener untuk menambahkan kelas 'reveal' saat elemen terlihat
    aboutSection.addEventListener('scrollreveal:afterReveal', function () {
        aboutSection.classList.add('reveal');
      });
    portfolioSection.addEventListener('scrollreveal:afterReveal', function () {
      portfolioSection.classList.add('reveal');
    });
  
    clientsSection.addEventListener('scrollreveal:afterReveal', function () {
      clientsSection.classList.add('reveal');
    });
  
    blogSection.addEventListener('scrollreveal:afterReveal', function () {
      blogSection.classList.add('reveal');
    });
  });
  
  function getScrollRevealConfig() {
    return {
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      reset: true
    };
  }
  
  