import throttle from 'lodash.throttle';
import { orderSubscriptionToNewProducts } from './get-api';

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onPost);

const localStorageKey = 'feedback-form-state';
const myButton = document.getElementById('footer-button');

const refs = {
  menu: document.querySelector('[data-menu]'),
  one: document.querySelector('[data-one]'),
  two: document.querySelector('[data-two]'),
};

form.addEventListener('submit', onPost);
function onPost(event) {
  event.preventDefault();
  const userEmail = form.elements.email.value;
  orderSubscriptionToNewProducts(userEmail)
    .then(data => {
      if (data.message) {
        refs.menu.classList.remove('is-hidden');
        refs.one.classList.remove('is-hidden');
      }
      refs.two.classList.add('is-hidden');
    })
    .catch(error => {
      refs.menu.classList.remove('is-hidden');
      refs.two.classList.remove('is-hidden');
      refs.one.classList.add('is-hidden');
    });
}

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
  localStorage.removeItem(localStorageKey);
  form.reset();
  validateForm();
});

myButton.addEventListener('click', function () {
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

document.body.style.overflow = 'auto';

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');

    document.body.classList.toggle('no-scroll');

    document.body.style.overflow = refs.menu.classList.contains('is-hidden')
      ? 'auto'
      : 'hidden';
  }

  const links = Array.from(refs.menu.children);
  links.forEach(link => {
    link.addEventListener('click', closeOnClick);
  });

  function closeOnClick() {
    refs.menu.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    document.body.style.overflow = 'auto';
  }
})();
