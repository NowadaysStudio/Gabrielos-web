<?php 
    $page_title = "Promociones"; 
    include 'includes/header.php'; 
?>

    <header class="page-header promo-header">
        <div class="overlay"></div>
        <div class="header-content fade-in-up">
            <h1>OFERTAS <span class="text-gold">IRRESISTIBLES</span></h1>
            <p>Porque la buena pizza se comparte mejor.</p>
        </div>
    </header>

    <section class="section-padding bg-black">
        <div class="container">
            <div class="featured-promo fade-in-up">
                <div class="promo-text">
                    <span class="badge">SOLO JUEVES</span>
                    <h2>LA HORA <span class="text-gold">DORADA</span></h2>
                    <p><strong>ALL YOU CAN EAT:</strong> Acceso ilimitado a nuestra barra de pizzas artesanales, ensaladas y bebidas seleccionadas por 2 horas.</p>
                    <div class="price-tag">
                        <span class="old-price">$350</span>
                        <span class="new-price">$199<small>/persona</small></span>
                    </div>
                    <a href="contacto.php" class="btn btn-primary">RESERVAR MESA</a>
                </div>
                <div class="promo-timer">
                    <p>La oferta termina en:</p>
                    <div id="countdown" class="countdown-container">
                        <div class="time-box"><span id="hours">00</span>Horas</div>
                        <div class="time-box"><span id="minutes">00</span>Min</div>
                        <div class="time-box"><span id="seconds">00</span>Seg</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding bg-dark-grey">
        <div class="container">
            <h2 class="section-title-center">PAQUETES Y <span class="text-gold">EVENTOS</span></h2>
            
            <div class="promo-grid">
                
                <div class="promo-card fade-in-up">
                    <div class="card-img">
                        <img src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fiesta Cumpleaños">
                        <div class="card-date">TODO EL MES</div>
                    </div>
                    <div class="card-body">
                        <h3>FESTEJA TU CUMPLEAÑOS</h3>
                        <p>¡El cumpleañero no paga! En mesas de 5 o más personas, tu consumo de alimentos es cortesía de la casa. Incluye postre especial.</p>
                        <a href="contacto.php" class="btn-link">RESERVAR AHORA <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div class="promo-card fade-in-up">
                    <div class="card-img">
                        <img src="https://images.unsplash.com/photo-1529589136696-3f6565f573c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="After Office">
                        <div class="card-date">LUN - VIE (1PM - 5PM)</div>
                    </div>
                    <div class="card-body">
                        <h3>PAQUETE EJECUTIVO</h3>
                        <p>Perfecto para la oficina. Pizza individual + Ensalada del día + Refresco. La pausa que tu equipo necesita.</p>
                        <a href="menu.php" class="btn-link">VER MENÚ <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div class="promo-card fade-in-up">
                    <div class="card-img">
                        <img src="https://images.unsplash.com/photo-1574966735456-14e96c9c43d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cubetazo">
                        <div class="card-date">VIERNES Y SÁBADO</div>
                    </div>
                    <div class="card-body">
                        <h3>PIZZA & DRINKS</h3>
                        <p>En la compra de cualquier pizza Grande o Familiar, llévate el cubetazo de cerveza nacional a mitad de precio.</p>
                        <a href="contacto.php" class="btn-link">VISÍTANOS <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

            </div>

            <div class="terms-text fade-in-up">
                <p>* Aplican restricciones. Sujeto a disponibilidad. Válido solo en comedor. Nos reservamos el derecho de admisión.</p>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>