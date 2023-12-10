import throttle from 'lodash.throttle';
//елементи форми та кнопки
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const myButton = document.getElementById('footer-button');
// Використовую lodash throttle, щоб обмежити виклики функції saveFormState
const saveFormState = throttle(() => {
  // Зберігаю введене значення електронної пошти в localStorage
  const formData = {
    email: form.elements.email.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}, 500);
// Коли сторінка завантажиться, отримати та заповнити форму збереженими даними
window.addEventListener('load', () => {
  const savedFormData = localStorage.getItem(localStorageKey);
  if (savedFormData) {
    const { email } = JSON.parse(savedFormData);
    form.elements.email.value = email;
  }
});
// Прослуховування вхідних подій у формі та збереження стану форми
form.addEventListener('input', () => {
  saveFormState();
  validateForm();
});
// Прослуховування подій надсилання форми
form.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = {
    email: form.elements.email.value,
  };
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  validateForm(); // Підтвердити після скидання форми
});
// Прослуховування подій натискання кнопки
myButton.addEventListener('click', function () {
  const savedFormData = localStorage.getItem(localStorageKey);
  if (savedFormData) {
    const { email } = JSON.parse(savedFormData);
    form.elements.email.value = email;
    validateForm();
  }
});
// Функція перевірки форми
const validateForm = () => {
  const emailValue = form.elements.email.value;
  const isValidEmail = isValidEmailFormat(emailValue);
  const isFilled = emailValue.trim() !== '';
  myButton.disabled = !(isValidEmail && isFilled);
};
// Функція перевірки правильності формату
const isValidEmailFormat = email => {
  //базовий шаблон регулярного виразу
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
// Функція автоматичного заповнення форми збереженими даними та перевірки
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
    document.body.style.overflow = 'hidden';
  }

  const links = Array.from(refs.menu.children);
  links.forEach(link => {
    link.addEventListener('click', closeOnClick);
  });

  function closeOnClick() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
    document.body.style.overflow = 'auto';
  }
})();
