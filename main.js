document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DE NAVEGACIÓN Y MENU HAMBURGUESA ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
        });
    }

    // --- 2. ANIMACIÓN SCROLL (Observer) ---
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

    // --- 3. FILTRADO DEL MENÚ (Si existe en la página) ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    if(filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                menuItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    if(filterValue === 'all' || filterValue === itemCategory) {
                        item.classList.remove('hide');
                        item.classList.add('fade-in-up');
                    } else {
                        item.classList.add('hide');
                        item.classList.remove('fade-in-up');
                    }
                });
            });
        });
    }

    // --- 4. FORMULARIO CONTACTO ---
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'ENVIANDO...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.innerText = '¡ENVIADO CON ÉXITO!';
                btn.style.backgroundColor = '#4BB543'; 
                btn.style.color = '#fff';
                contactForm.reset();
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = ''; 
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }

    // --- 5. TIMER PROMOCIONES ---
    const countdown = document.getElementById('countdown');
    if(countdown) {
        const now = new Date();
        const endTime = new Date(now.getTime() + (24 * 60 * 60 * 1000)); 

        const updateTimer = () => {
            const currentTime = new Date();
            const diff = endTime - currentTime;
            if (diff <= 0) endTime.setTime(currentTime.getTime() + (24 * 60 * 60 * 1000));

            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / 1000 / 60) % 60);
            const s = Math.floor((diff / 1000) % 60);

            document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
            document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
            document.getElementById('seconds').innerText = s < 10 ? '0' + s : s;
        };
        setInterval(updateTimer, 1000);
        updateTimer(); 
    }

    // --- 6. GENERADOR DE RESEÑAS (EXPERIENCIAS) ---
    const heroContainer = document.getElementById('hero-review-container');
    const gridContainer = document.getElementById('reviews-grid');

    if (heroContainer && gridContainer) {
        
        // Base de Datos de las 20 Reseñas
        const reviewsData = [
            { id: 1, name: "Francisco", lastname: "Rodríguez", time: "Hace 2 meses", text: "Me ayudaron a decorar todo para mi propuesta, me preguntaron si quería una canción en específico para el momento, la forma de corazón de la pizza fue un toque muy bonito, con cualquier petición era un si, lo recomiendo mucho sobre todo por la excelente comida, súper rica, la pizza, la pasta alfredo en especial y las bebidas súper frescas.", rating: 5, likes: 142, isHero: true },
            { id: 2, name: "Mayra", lastname: "Cobos", time: "Hace 3 meses", text: "Es la primera vez que los visito y me encantó su servicio, el lugar muy limpio y decorado súper lindo y con vista al cerro de la silla en la parte de arriba. Los meseros siempre al pendiente de todo y muy amables y rápidos. Comida riquísima, los recomiendo bastante 🙌🏻", rating: 5, likes: 24 },
            { id: 3, name: "Yesenia", lastname: "Arias", time: "Hace 10 meses", text: "La primera vez que acudo por recomendación de amigos y me gustó mucho el lugar por la calidad de los alimentos, la pizza 🍕 muy rica con su generosa cantidad de queso, pedimos papas con pimienta limón, pasta, todo muy rico, el agua de jamaica también.", rating: 5, likes: 12 },
            { id: 4, name: "Angel", lastname: "Tsuki", time: "Hace 2 años", text: "Uno de los mejores lugares donde venden pizzas y sobre todo artesanales, demasiado ricas las pizzas hechas al horno, la comida de cocina también esta igual de exquisita, 100% recomendado y sobre todo las bebidas que sirven", rating: 5, likes: 45 },
            { id: 5, name: "Giselle", lastname: "Méndez", time: "Hace 1 año", text: "Me gusta mucho este lugar, el ambiente es tranquilo y la terraza agradable, costo justo para lo que ofrece y los alimentos son muy ricos", rating: 5, likes: 89 },
            { id: 6, name: "Karla", lastname: "Senties", time: "Hace 7 meses", text: "Todo delicioso, la pizza Alfredo es un 10/10. Excelente servicio", rating: 5, likes: 30 },
            { id: 7, name: "Luz", lastname: "Ramirez", time: "Hace 1 año", text: "Excelente sabor. Pasta, pizza, aguas de sabor 👍🏻 Por muchos años mas de exitos …", rating: 5, likes: 18 },
            { id: 8, name: "Lizeth", lastname: "Ríos", time: "Hace 4 años", text: "Excelente atención y servicio, el lugar no cuenta con estacionamiento sin embargo esta bien la zona para dejar el carro, la comida deliciosa y hay espacio para comer, cuentan con las medidas adecuadas de seguridad COVID", rating: 5, likes: 10 },
            { id: 9, name: "Nephtali", lastname: "Calvillo", time: "Hace 3 meses", text: "Excelente comida y servicio!", rating: 5, likes: 55 },
            { id: 10, name: "Devora", lastname: "de Ases", time: "Hace 3 meses", text: "Excelente ambiente y muy buen servicio.", rating: 5, likes: 22 },
            { id: 11, name: "Daniel", lastname: "Salmón", time: "Hace 5 años", text: "Primera vez que la pruebo, de verdad es muy buena! Pedí la Gabrielo’s suprema rellena con extra queso.... deliciosa! Buen servicio, trato amable, buen precio y no tardaron en tenerla lista. Excelente servicio.", rating: 5, likes: 41 },
            { id: 12, name: "Aranza", lastname: "Tovar", time: "Hace 1 mes", text: "La atención y la comida no decepciona nunca", rating: 5, likes: 33 },
            { id: 13, name: "Geraldine", lastname: "González", time: "Hace 3 años", text: "Son unas pizzas deliciosas estilo Chicago. Son muy llenadoras. El lugar es pequeño y muy bonito. Recomiendo mucho", rating: 5, likes: 15 },
            { id: 14, name: "Ángel", lastname: "Murillo", time: "Hace 5 años", text: "Buen trato, muy rica comida. Precios medios no altos pero la comida vale la pena.", rating: 5, likes: 28 },
            { id: 15, name: "Ana", lastname: "Sofía", time: "Hace 5 años", text: "Buena pizza. El spaghetti esta riquísimo uff. La caja redonda muy original y linda", rating: 5, likes: 60 },
            { id: 16, name: "Gabuworld", lastname: "", time: "Hace 6 años", text: "Pizza super deliciosa, en verdad me encanto y el precio accesible. No se tardaron nada, como es costumbre en otras pizzerias. Personal super amable y el lugar lindo. 👏 …", rating: 5, likes: 5 },
            { id: 17, name: "Alfonso", lastname: "M.", time: "Hace 1 año", text: "Muy bonito lugar, el lugar limpio y todo ordenado. El personal es bastante atento. Pedimos una pizza de pepperoni y estaba muy rica. Lo recomiendo mucho.", rating: 5, likes: 37 },
            { id: 18, name: "Patricia", lastname: "Chávez", time: "Hace 6 años", text: "Las pizzas son muy ricas y la atención es buena. Puedes ver todo el proceso de como preparan tu pizza.", rating: 4, likes: 72 },
            { id: 19, name: "Valeria", lastname: "Sanchez", time: "Hace 6 años", text: "Primera vez que voy a este lugar y lo recomiendo al 💯 muy rica la pizza 🤤 …", rating: 5, likes: 19 },
            { id: 20, name: "Yare", lastname: "Pérez", time: "Hace 4 años", text: "Excelente servicio, la comida deliciosa, sin dudas vuelvo a ir.", rating: 5, likes: 44 }
        ];

        // Función para estrellas
        function getStarsHtml(rating) {
            let stars = '';
            for (let i = 0; i < 5; i++) {
                if (i < rating) stars += '<i class="fas fa-star"></i>';
                else stars += '<i class="far fa-star"></i>';
            }
            return stars;
        }

        // Renderizado
        reviewsData.forEach((review) => {
            const imgBaseName = review.id;
            const fullName = `${review.name} ${review.lastname}`;

            if (review.isHero) {
                // Renderizar Hero Card (Horizontal) - FORMATO ACTUALIZADO
                const heroHtml = `
                    <div class="hero-card fade-in-up">
                        <div class="hero-content-left">
                            <div class="user-header">
                                <div class="avatar-circle"><i class="fas fa-user"></i></div>
                                <div class="user-info">
                                    <span class="username">${fullName}</span>
                                    <span class="time-ago">${review.time}</span>
                                </div>
                            </div>
                            <div class="review-text">
                                <p>“${review.text}”</p>
                            </div>
                            <div class="rating-stars">
                                ${getStarsHtml(review.rating)}
                            </div>
                            <div class="card-actions">
                                <button class="like-btn"><i class="far fa-heart"></i> <span class="like-count">${review.likes}</span></button>
                                <span class="share-icon text-gold" style="font-weight: 700; font-size: 0.9rem; text-transform: uppercase;">Destacado <i class="fas fa-star"></i></span>
                            </div>
                        </div>
                        <div class="hero-images-right">
                            <div class="hero-img-col"><img src="reviews_img/${imgBaseName}_a.jpg" alt="Review img 1" onerror="this.src='https://via.placeholder.com/400x600/000/fff?text=Foto+1'"></div>
                            <div class="hero-img-col"><img src="reviews_img/${imgBaseName}_b.jpg" alt="Review img 2" onerror="this.src='https://via.placeholder.com/400x600/111/fff?text=Foto+2'"></div>
                        </div>
                    </div>
                `;
                heroContainer.innerHTML = heroHtml;

            } else {
                // Renderizar Tarjeta Vertical (Masonry)
                // Se agregan clases 'spacer' para variar alturas
                const extraClass = review.text.length < 60 ? 'spacer-l' : (review.text.length < 100 ? 'spacer-m' : '');
                
                const cardHtml = `
                    <div class="social-card fade-in-up ${extraClass}">
                        <div class="card-image">
                            <img src="reviews_img/${imgBaseName}.jpg" alt="Experiencia ${review.name}" onerror="this.src='https://via.placeholder.com/800x600/222/fff?text=Foto+${review.name}'">
                        </div>
                        <div class="card-content">
                            <div class="user-header">
                                <div class="avatar-circle"><i class="fas fa-user"></i></div>
                                <div class="user-info">
                                    <span class="username">${fullName}</span>
                                    <span class="time-ago">${review.time}</span>
                                </div>
                            </div>
                            <div class="review-text">
                                <p>“${review.text}”</p>
                            </div>
                            <div class="rating-stars">
                                ${getStarsHtml(review.rating)}
                            </div>
                            <div class="card-actions">
                                <button class="like-btn">
                                    <i class="far fa-heart"></i> <span class="like-count">${review.likes}</span>
                                </button>
                                <span class="share-icon"><i class="far fa-paper-plane"></i></span>
                            </div>
                        </div>
                    </div>
                `;
                gridContainer.insertAdjacentHTML('beforeend', cardHtml);
            }
        });
        
        // Reactivar el observador de scroll para las nuevas tarjetas
        const newCards = document.querySelectorAll('.social-card, .hero-card');
        newCards.forEach(el => observer.observe(el));
    }

    // --- 7. LÓGICA DE LIKES (Delegación de eventos para elementos dinámicos) ---
    // Usamos delegación porque las tarjetas se crearon dinámicamente
    document.body.addEventListener('click', function(e) {
        // Buscar el botón más cercano al click (por si se da click en el icono y no en el botón)
        const btn = e.target.closest('.like-btn');
        
        if (btn) {
            const icon = btn.querySelector('i');
            const countSpan = btn.querySelector('.like-count');
            let count = parseInt(countSpan.innerText);

            btn.classList.toggle('liked');

            if (btn.classList.contains('liked')) {
                icon.classList.remove('far');
                icon.classList.add('fas'); 
                count++;
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                count--;
            }
            countSpan.innerText = count;
        }
    });

});

// --- Lógica Galería Infinita (Auto-Scroll) ---
document.addEventListener('DOMContentLoaded', () => {
    const reel = document.querySelector('.gallery-reel');
    
    if (reel) {
        // 1. Clonar elementos para crear ilusión de infinitud
        const items = Array.from(reel.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            reel.appendChild(clone);
        });

        // Variables de control
        let scrollAmount = 0;
        const speed = 0.5; // Velocidad del scroll (ajustable)
        let isHovered = false;
        let animationId;

        // 2. Función de animación
        const scrollLoop = () => {
            if (!isHovered) {
                scrollAmount += speed;
                
                // Si llegamos a la mitad (fin del contenido original), resetear a 0
                // scrollWidth / 2 funciona porque duplicamos el contenido exacto
                if (scrollAmount >= reel.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                
                reel.scrollLeft = scrollAmount;
            } else {
                // Sincronizar variable con scroll manual del usuario si pausó
                scrollAmount = reel.scrollLeft;
            }
            
            animationId = requestAnimationFrame(scrollLoop);
        };

        // 3. Iniciar loop
        animationId = requestAnimationFrame(scrollLoop);

        // 4. Control de Pausa (Desktop Hover / Mobile Touch)
        reel.addEventListener('mouseenter', () => isHovered = true);
        reel.addEventListener('mouseleave', () => isHovered = false);
        
        reel.addEventListener('touchstart', () => isHovered = true, {passive: true});
        reel.addEventListener('touchend', () => {
            setTimeout(() => isHovered = false, 1000); // Pequeño delay antes de reanudar
        });
    }
});