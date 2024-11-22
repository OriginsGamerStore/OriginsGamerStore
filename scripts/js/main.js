console.log('Script cargado');

const carousel = document.querySelector('.carousel-marcas');

// Pausar animación al hacer hover
carousel.addEventListener('mouseover', () => {
    carousel.style.animationPlayState = 'paused';
});

// Reanudar animación al quitar hover
carousel.addEventListener('mouseout', () => {
    carousel.style.animationPlayState = 'running';
});
// JavaScript para alternar el menú hamburguesa
const hamburgerMenu = document.querySelector('.hamburger-menu');
const headerRight = document.querySelector('.header-right');

//ovarlay
document.addEventListener('DOMContentLoaded', function() {
  const searchButtonA = document.querySelector('.btn-search-mobile');  // Botón 1
  const searchButtonB = document.querySelector('.btn-search-mobile-b');  // Botón 2

  const overlayA = document.querySelector('.search-overlay-a');  // Overlay 1
  const overlayB = document.querySelector('.search-overlay-b');  // Overlay 2

  // Mostrar overlay para el primer botón
  if (searchButtonA && overlayA) {
      searchButtonA.addEventListener('click', function() {
          overlayA.style.display = 'flex';  // Mostrar overlay A
      });

      // Cerrar overlay A si se hace clic fuera del área de búsqueda
      overlayA.addEventListener('click', function(e) {
          if (e.target === overlayA) {
              overlayA.style.display = 'none';  // Ocultar overlay A
          }
      });
  }

  // Mostrar overlay para el segundo botón
  if (searchButtonB && overlayB) {
      searchButtonB.addEventListener('click', function() {
          overlayB.style.display = 'flex';  // Mostrar overlay B
      });

      // Cerrar overlay B si se hace clic fuera del área de búsqueda
      overlayB.addEventListener('click', function(e) {
          if (e.target === overlayB) {
              overlayB.style.display = 'none';  // Ocultar overlay B
          }
      });
  }
});

// detail 
// Obtener el botón y el contenedor principal del detalle
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleDetail');
    const detail = document.querySelector('.detail');

    toggleButton.addEventListener('click', () => {
        detail.classList.toggle('expanded'); // Alternar entre mostrar y ocultar
    });
});
