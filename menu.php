<?php 
    $page_title = "Menú"; 
    include 'includes/header.php'; 
?>

    <header class="page-header">
        <div class="overlay"></div>
        <div class="header-content fade-in-up">
            <h1>NUESTRO <span class="text-gold">MENÚ</span></h1>
            <p>Sabores auténticos creados con pasión</p>
        </div>
    </header>

    <section class="section-padding bg-black menu-section">
        <div class="container">
            
            <div class="menu-filters fade-in-up">
                <button class="filter-btn active" data-filter="all">Todo</button>
                <button class="filter-btn" data-filter="clasicas">Clásicas</button>
                <button class="filter-btn" data-filter="gourmet">Gourmet</button>
                <button class="filter-btn" data-filter="bebidas">Bebidas</button>
            </div>

            <div class="menu-grid">
                
                <div class="menu-item fade-in-up" data-category="clasicas">
                    <div class="menu-img">
                        <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pizza Pepperoni">
                        <span class="price">$180</span>
                    </div>
                    <div class="menu-info">
                        <h3>PEPPERONI CLÁSICA</h3>
                        <p>Salsa de tomate casera, mozzarella premium y doble porción de pepperoni madurado.</p>
                    </div>
                </div>

                <div class="menu-item fade-in-up" data-category="gourmet">
                    <div class="menu-img">
                        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pizza Margarita">
                        <span class="price">$220</span>
                    </div>
                    <div class="menu-info">
                        <h3>MARGARITA ESPECIAL</h3>
                        <p>Tomates cherry, albahaca fresca, mozzarella de búfala y un toque de aceite de oliva extra virgen.</p>
                    </div>
                </div>

                <div class="menu-item fade-in-up" data-category="gourmet">
                    <div class="menu-img">
                        <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pizza Carnes Frias">
                        <span class="price">$250</span>
                    </div>
                    <div class="menu-info">
                        <h3>GABRIELO'S MEAT</h3>
                        <p>Nuestra especialidad de la casa: Salami, jamón serrano, chorizo italiano y aceitunas negras.</p>
                    </div>
                </div>

                <div class="menu-item fade-in-up" data-category="clasicas">
                    <div class="menu-img">
                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pizza Hawaiana">
                        <span class="price">$190</span>
                    </div>
                    <div class="menu-info">
                        <h3>HAWAIANA ARTESANAL</h3>
                        <p>Piña asada con canela, jamón de pierna horneado y queso manchego.</p>
                    </div>
                </div>

                 <div class="menu-item fade-in-up" data-category="bebidas">
                    <div class="menu-img">
                        <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Refresco Italiano">
                        <span class="price">$65</span>
                    </div>
                    <div class="menu-info">
                        <h3>SODA ITALIANA</h3>
                        <p>Refrescante mezcla de agua carbonatada y jarabes frutales naturales (Fresa, Maracuyá, Mango).</p>
                    </div>
                </div>

                <div class="menu-item fade-in-up" data-category="bebidas">
                    <div class="menu-img">
                        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cerveza Artesanal">
                        <span class="price">$85</span>
                    </div>
                    <div class="menu-info">
                        <h3>CERVEZA ARTESANAL</h3>
                        <p>Selección de cervezas locales tipo Lager, IPA y Stout para maridar perfectamente.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>