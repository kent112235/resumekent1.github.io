 
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
  


function showToast(message) {
    console.log('showToast called with message:', message); // Debugging
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}



document.querySelector('#contact-form').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(this); // Get form data

  try {
      const response = await fetch(this.action, {
          method: 'POST',
          body: formData,
      });

      const result = await response.json();

      if (result.status === 'success') {
          showToast(result.message, 'success');
      } else {
          showToast(result.message, 'error');
      }
  } catch (error) {
      showToast('An unexpected error occurred.', 'error');
  }
});



const formData = new FormData(document.querySelector('#contact-form'));

fetch('process_form.php', {
    method: 'POST', // Ensure this matches the server-side script
    body: formData,
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Response:', data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
