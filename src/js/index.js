document.addEventListener('DOMContentLoaded', () => {
  // Elementos do menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Configuração única do menu hamburguer
  if (menuToggle && navLinks) {
      // Animação do menu hamburguer
      menuToggle.addEventListener('click', () => {
          menuToggle.classList.toggle('active');
          navLinks.classList.toggle('active');
      });

      // Função para fechar o menu mobile
      const closeMobileMenu = () => {
          if (window.innerWidth <= 768) {
              menuToggle.classList.remove('active');
              navLinks.classList.remove('active');
          }
      };

      // Scroll suave e fechar menu ao clicar em links
      document.querySelectorAll('.nav-links a').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              const targetId = this.getAttribute('href');
              
              // Se for um link âncora (#)
              if (targetId.startsWith('#')) {
                  e.preventDefault();
                  const targetElement = document.querySelector(targetId);
                  
                  if (targetElement) {
                      closeMobileMenu();
                      
                      const navbarHeight = document.querySelector('.navbar').offsetHeight;
                      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                      
                      window.scrollTo({
                          top: targetPosition,
                          behavior: 'smooth'
                      });
                  }
              }
              // Para links normais, apenas fecha o menu
              else {
                  closeMobileMenu();
              }
          });
      });

      // Ajustar menu ao redimensionar
      window.addEventListener('resize', () => {
          if (window.innerWidth > 768) {
              menuToggle.classList.remove('active');
              navLinks.classList.remove('active');
          }
      });
  }

  // Animação nas sections
  const sections = document.querySelectorAll('section');
  const checkSections = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      
      sections.forEach(section => {
          if (section.offsetTop < scrollPosition) {
              section.classList.add('show');
          }
      });
  };
  
  if (sections.length) {
      checkSections();
      window.addEventListener('scroll', checkSections);
  }

  // Configuração do Swiper (se existir)
  if (document.querySelector('.mySwiper')) {
      new Swiper(".mySwiper", {
          slidesPerView: 3,
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
  }

  // FAQ - Mostrar/esconder respostas
  const containers = document.querySelectorAll('.container');
  if (containers.length) {
      containers.forEach(container => {
          const question = container.querySelector('.question');
          const arrow = container.querySelector('.arrow');
          const answer = container.querySelector('.answer');
          
          if (question && arrow && answer) {
              const toggleAnswer = () => {
                  answer.classList.toggle('open');
                  arrow.textContent = answer.classList.contains('open') ? '▲' : '▼';
              };
              
              question.addEventListener('click', toggleAnswer);
              arrow.addEventListener('click', toggleAnswer);
          }
      });
  }

  // Desabilitar drag em imagens
  document.querySelectorAll('img').forEach(img => {
      img.setAttribute('draggable', 'false');
  });

  // Atualização de ano no copyright
  const yearElement = document.getElementById('year');
  if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
  }
});