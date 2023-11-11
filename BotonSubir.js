document.addEventListener('DOMContentLoaded', function() {
    var goTopBtn = document.querySelector('.ir-arriba');

    goTopBtn.addEventListener('click', function() {
        var scrollToTop = window.setInterval(function() {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // Cada iteración sube 20 píxeles
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 6); // Velocidad del scroll en milisegundos

        return false;
    })

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            goTopBtn.style.display = 'block';
        } else {
            goTopBtn.style.display = 'none';
        }
    });

    var menuIcono = document.querySelector('.Menu-Icono');
    var navbar = document.querySelector('.Navbar');

    menuIcono.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});