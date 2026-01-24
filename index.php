<?php 
    $page_title = "Inicio"; 
    include 'includes/header.php'; 
?>

    <header class="hero">
        <div class="overlay"></div>
        <div class="hero-content fade-in-up">
            <h1>Hechas artesanalmente con tradición... <span class="text-gold">donde la calidad es el ingrediente principal!</span></h1>
            <div style="margin-top: 30px;">
                <button class="btn btn-outline" type="button">RESERVAR</button>
                <a href="menu.php" class="btn btn-primary">VER MENÚ</a>
            </div>
        </div>
    </header>

    <section class="gallery-section">
        <div class="gallery-title-wrapper fade-in-up">
            <h2 class="section-title-center">GALERÍA <span class="text-gold">VISUAL</span></h2>
            <p style="color:#888; margin-top:10px;">Desliza para ver más</p>
        </div>

        <div class="gallery-reel fade-in-right">
            <div class="reel-item">
                <img src="imgmain/imgcarrusel/img1.jpg" alt="Pizza Detalle">
                <div class="reel-overlay"><i class="fas fa-camera reel-icon"></i></div>
            </div>
            <div class="reel-item">
                <img src="imgmain/imgcarrusel/img2.jpg" alt="Horno Fuego">
                <div class="reel-overlay"><i class="fas fa-fire reel-icon"></i></div>
            </div>
            <div class="reel-item">
                <img src="imgmain/imgcarrusel/img3.jpg" alt="Pizza Mesa">
                <div class="reel-overlay"><i class="fas fa-utensils reel-icon"></i></div>
            </div>
            <div class="reel-item">
                <img src="imgmain/imgcarrusel/img4.jpg" alt="Bebidas">
                <div class="reel-overlay"><i class="fas fa-glass-cheers reel-icon"></i></div>
            </div>
            <div class="reel-item">
                <img src="imgmain/imgcarrusel/img5.jpg" alt="Ingredientes">
                <div class="reel-overlay"><i class="fas fa-leaf reel-icon"></i></div>
            </div>
            <div class="reel-item">
                <img src="imgmain/imgcarrusel/img6.jpg" alt="Ambiente">
                <div class="reel-overlay"><i class="fas fa-users reel-icon"></i></div>
            </div>
        </div>
    </section>

    <section class="section-padding bg-dark-grey">
        <div class="container grid-2">
            
            <div class="image-column fade-in-left">
                <img src="imgmain/boneless2x1.jpg" alt="Promoción Boneless y Cerveza Stella Artois" class="promo-rect-img">
            </div>

            <div class="text-column fade-in-right">
                <span class="badge">SOLO LOS JUEVES</span>
                <h2 class="section-title">DOBLE SABOR, <span class="text-gold">MITAD DE PRECIO</span></h2>
                <span class="promo-subtitle">BONELESS AL 2x1</span>
                
                <p>La excusa perfecta para cortar la semana. Disfruta de nuestros boneless premium: trozos de pechuga de pollo, empanizados artesanalmente y bañados en nuestras salsas exclusivas.</p>
                <p><strong>El maridaje sugerido:</strong> Acompaña tu orden con una Stella Artois o tu cerveza nacional favorita para resaltar las notas picantes y crujientes.</p>
                
                <div class="promo-features">
                    <div class="promo-tag"><i class="fas fa-drumstick-bite"></i> 100% Pechuga</div>
                    <div class="promo-tag"><i class="fas fa-beer"></i> Venta de Alcohol</div>
                    <div class="promo-tag"><i class="fas fa-tv"></i> Zona Music</div>
                </div>

                <a href="contacto.php" class="btn btn-primary">RESERVAR</a>
            </div>

        </div>
    </section>

    <section class="section-padding bg-black" id="eventos">
        <div class="container grid-2">
            
            <div class="text-column fade-in-left">
                <h2 class="section-title">CELEBRA TUS <span class="text-gold">EVENTOS</span></h2>
                
                <p>Haz de tus fechas especiales un momento inolvidable. Nuestro espacio es el escenario ideal para reuniones, cumpleaños, posadas y reuniones corporativas. Ofrecemos un ambiente cálido, privacidad y la mejor pizza artesanal.</p>

                <div class="reservation-box-dark">
                    <strong><i class="fas fa-calendar-check"></i> Política de Reservas</strong>
                    <p style="margin:0; font-size: 0.95rem; color: #ccc;">
                        Las reservaciones se gestionan exclusivamente para <b>grupos de 10 personas o más</b>. Si tu grupo es menor, acude directamente y te asignaremos mesa por orden de llegada.
                    </p>
                </div>

                <a href="https://wa.me/528112345678" target="_blank" class="btn btn-outline">RESERVAR EVENTO</a>
            </div>

            <div class="image-column fade-in-right">
                <div class="event-img-wrapper">
                    <img src="imgmain/reserva.jpg" alt="Evento privado en Gabrielos Pizza" class="event-img-offset">
                </div>
            </div>

        </div>
    </section>

<?php 
    include 'includes/footer.php'; 
?>