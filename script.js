document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    successMessage.classList.remove('hidden');
    form.reset();
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 3000);
  });
});
