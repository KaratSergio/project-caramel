import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const myButton = document.getElementById('footer-button');

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
  validateForm();
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = {
    email: form.elements.email.value,
  };
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  validateForm();
});

myButton.addEventListener('click', function () {
  console.log('Button clicked');
  const savedFormData = localStorage.getItem(localStorageKey);
  if (savedFormData) {
    const { email } = JSON.parse(savedFormData);
    form.elements.email.value = email;
    validateForm();
  }
});

const validateForm = () => {
  const emailValue = form.elements.email.value;
  const isValidEmail = isValidEmailFormat(emailValue);
  const isFilled = emailValue.trim() !== '';
  myButton.disabled = !(isValidEmail && isFilled);
};

const isValidEmailFormat = email => {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const autoFillForm = () => {
  const savedFormData = localStorage.getItem(localStorageKey);
  if (savedFormData) {
    const { email } = JSON.parse(savedFormData);
    form.elements.email.value = email;
    validateForm();
  }
};

autoFillForm();

//прокрутка
document.body.style.overflow = 'auto';

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

    document.body.style.overflow = refs.menu.classList.contains('is-hidden') ? 'auto' : 'hidden';
  }

  
  const closeOnClick = () => {
    refs.menu.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    document.body.style.overflow = 'auto';
    location.reload();
  };

  const closeOnEsc = (event) => {
    if (event.key === 'Escape') {
      closeOnClick();
    }
  };

  const closeOnOverlayClick = (event) => {
    if (event.target === refs.menu) {
      closeOnClick();
    }
  };

  const links = Array.from(refs.menu.children);
  links.forEach(link => {
    link.addEventListener('click', closeOnClick);
  });

  
  document.addEventListener('keydown', closeOnEsc);
  document.addEventListener('click', closeOnOverlayClick);

  // function closeOnClick() {
  //   refs.menu.classList.add('is-hidden');
  //   document.body.classList.remove('no-scroll');
  //   document.body.style.overflow = 'auto';
  // }
})();

