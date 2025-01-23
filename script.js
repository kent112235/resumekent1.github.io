 
  /* JavaScript for Navigation Burger */
  const burger = document.createElement('div');
  burger.classList.add('burger');
  burger.innerHTML = '<span></span><span></span><span></span>';
  document.querySelector('header').prepend(burger);
  
  const nav = document.querySelector('.navigation');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });


  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar-toggle');  // Select the burger button
    const nav = document.querySelector('.navbar-menu');  // Select the navbar menu
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');  // Toggle the 'active' class on the navbar menu
      burger.classList.toggle('toggle');  // Toggle the 'toggle' class on the burger button
    });
  });
  




