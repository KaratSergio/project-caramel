const scrollToTopButton = document.getElementById('scrollToTopBtn');
const scrollOffset = 360;

window.onscroll = function () {
  if (
    document.body.scrollTop > scrollOffset ||
    document.documentElement.scrollTop > scrollOffset
  ) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
};

scrollToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
