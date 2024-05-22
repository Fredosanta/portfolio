// script.js

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');
    var homeSection = document.querySelector('#home');
    var aboutSection = document.querySelector('#about');
    
    var observerOptions = {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                navLinks.forEach(function(link) {
                    link.style.color = entry.target.id === 'about' ? 'black' : 'green';
                    link.style.transition = 'color 0.5s';
                });
            }
        });
    }, observerOptions);

    observer.observe(homeSection);
    observer.observe(aboutSection);
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
  var navBar = document.querySelector('nav');
  var aboutSection = document.querySelector('#about');
  
  var observerOptions = {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
  };

  var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting) {
              navBar.style.transition = 'opacity 0.5s';
              navBar.style.opacity = '0';
          } else {
              navBar.style.transition = 'opacity 0.5s';
              navBar.style.opacity = '1';
          }
      });
  }, observerOptions);

  observer.observe(aboutSection);
});

// Sélectionnez tous les liens de navigation
var navLinks = document.querySelectorAll('nav ul li a');

// Parcourez chaque lien
navLinks.forEach(function(link) {
    // Ajoutez un écouteur d'événements pour le survol de la souris
    link.addEventListener('mouseover', function() {
        // Changez la couleur et l'échelle du lien lorsqu'il est survolé
        link.style.color = '#bbe9c0'; // Changez ceci à la couleur souhaitée
        link.style.transform = 'scale(1.1)';
    });

    // Ajoutez un écouteur d'événements pour lorsque la souris n'est plus sur le lien
    link.addEventListener('mouseout', function() {
        // Réinitialisez la couleur et l'échelle du lien lorsqu'il n'est plus survolé
        link.style.color = ''; // Changez ceci à la couleur initiale
        link.style.transform = '';
    });
});


const burgerIcon = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu');

burgerIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});

$(document).ready(function() {
    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize <= 768) {
            // Si la largeur de la fenêtre est inférieure ou égale à 768px, active le menu burger
            $('#burger-menu').show();
        } else {
            // Sinon, cache le menu burger
            $('#burger-menu').hide();
        }
    }

    // Vérifie la largeur de la fenêtre au chargement de la page
    checkWidth();

    // Vérifie la largeur de la fenêtre chaque fois que la fenêtre est redimensionnée
    $(window).resize(checkWidth);
});
$(document).ready(function() {
    $('.burger-icon').click(function() {
        $('.navbar').slideToggle();
    });
});

