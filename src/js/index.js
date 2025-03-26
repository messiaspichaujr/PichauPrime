// Animação nas sections quando aparecem no viewport

document.addEventListener('DOMContentLoaded', () => {
  let sections = document.querySelectorAll('section');
  let scrollPosition = window.scrollY + window.innerHeight;

  sections.forEach(section => {
    if (section.offsetTop < scrollPosition) {
      section.classList.add('show');
    }
  });

  window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
      if (section.offsetTop < scrollPosition) {
        section.classList.add('show');
      }
    });
  });
});

//Configura o Swiper para carrossel de slides

var swiper = new Swiper(".mySwiper", {

  slidesPerView: 3, // Padrão: 3 slides visíveis
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Mostra e esconde as respostas das perguntas

const containers = document.querySelectorAll('.container');

containers.forEach(container => {
  const question = container.querySelector('.question');
  const arrow = container.querySelector('.arrow');
  const answer = container.querySelector('.answer');

  const toggleAnswer = () => {
    answer.classList.toggle('open');
    arrow.textContent = answer.classList.contains('open') ? '▲' : '▼';
  };

  question.addEventListener('click', toggleAnswer);
  arrow.addEventListener('click', toggleAnswer);

});

// Desabilita o "drag" em todas as imagens

document.querySelectorAll('img').forEach(img => {
  img.setAttribute('draggable', 'false');
});

// Atualização de ano automático no copyright

document.getElementById("year").textContent = new Date().getFullYear();
