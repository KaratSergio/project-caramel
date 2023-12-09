import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const saveFormState = throttle(() => {
  const formData = {
    email: form.elements.email.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}, 500);
window.addEventListener('load', () => {
  const savedFormData = localStorage.getItem(localStorageKey);
  if (savedFormData) {
    const { email } = JSON.parse(savedFormData);
    form.elements.email.value = email;
  }
});
form.addEventListener('input', () => {
  saveFormState();
});
form.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = {
    email: form.elements.email.value,
  };
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
const autoFillForm = () => {
  const savedFormData = localStorage.getItem(localStorageKey);
  if (savedFormData) {
    const { email } = JSON.parse(savedFormData);
    form.elements.email.value = email;
  }
};
autoFillForm();

// Модалка
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }

  const links = Array.from(refs.menu.children);
  links.forEach(link => {
    link.addEventListener('click', closeOnClick);
  });

  function closeOnClick() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
