// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Menú Hamburguesa (Mobile) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        
        // Animación del icono
        hamburger.classList.toggle('toggle');
    });

    // --- Animación Scroll (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.2, // Disparar cuando el 20% del elemento sea visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    }, observerOptions);

    // Seleccionar elementos a animar
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Menú Hamburguesa ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
        });
    }

    // --- Animación Scroll ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));


    // --- Filtrado del Menú (NUEVO) ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    if(filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remover clase active de todos los botones
                filterBtns.forEach(b => b.classList.remove('active'));
                // Añadir active al botón clickeado
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                menuItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if(filterValue === 'all' || filterValue === itemCategory) {
                        item.classList.remove('hide');
                        item.classList.add('fade-in-up'); // Re-activar animación
                    } else {
                        item.classList.add('hide');
                        item.classList.remove('fade-in-up');
                    }
                });
            });
        });
    }
});

// --- Manejo del Formulario de Contacto ---
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'ENVIANDO...';
            btn.style.opacity = '0.7';
            
            // Simulación de envío
            setTimeout(() => {
                btn.innerText = '¡ENVIADO CON ÉXITO!';
                btn.style.backgroundColor = '#4BB543'; // Verde éxito
                btn.style.color = '#fff';
                
                contactForm.reset();
                
                // Restaurar botón después de 3 segundos
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = ''; // Volver al color CSS original
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }

// --- Countdown Timer Logic ---
    const countdown = document.getElementById('countdown');
    if(countdown) {
        // Configurar fecha fin (ejemplo: 24 horas desde ahora)
        // En un caso real, esto sería una fecha fija como 'Dec 31, 2024 23:59:59'
        const now = new Date();
        const endTime = new Date(now.getTime() + (24 * 60 * 60 * 1000)); 

        const updateTimer = () => {
            const currentTime = new Date();
            const diff = endTime - currentTime;

            if (diff <= 0) {
                // Si el tiempo termina, reiniciar (loop de demo)
                endTime.setTime(currentTime.getTime() + (24 * 60 * 60 * 1000));
            }

            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / 1000 / 60) % 60);
            const s = Math.floor((diff / 1000) % 60);

            document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
            document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
            document.getElementById('seconds').innerText = s < 10 ? '0' + s : s;
        };

        setInterval(updateTimer, 1000);
        updateTimer(); // Ejecutar inmediatamente
    }


// --- Lógica de la Sección Experiencias (Likes) ---
    const likeBtns = document.querySelectorAll('.like-btn');

    if(likeBtns.length > 0) {
        likeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const icon = this.querySelector('i');
                const countSpan = this.querySelector('.like-count');
                let count = parseInt(countSpan.innerText);

                // Toggle estado
                this.classList.toggle('liked');

                if (this.classList.contains('liked')) {
                    // Si dio like
                    icon.classList.remove('far'); // Icono contorno
                    icon.classList.add('fas');    // Icono relleno
                    count++;
                } else {
                    // Si quitó like
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    count--;
                }

                countSpan.innerText = count;
            });
        });
    }