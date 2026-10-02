// ==========================================================
// Configurações Globais
// ==========================================================
const WA_NUMBER = '5551999999999';

// ==========================================================
// Dados do Cardápio e Galeria
// ==========================================================
const menuData = [
    { id: 1, categoria: 'entradas', nome: 'Bruschetta da Casa', preco: 28.00, desc: 'Pão artesanal, tomate, manjericão e azeite.', img: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80' },
    { id: 2, categoria: 'entradas', nome: 'Batata Rústica', preco: 24.00, desc: 'Batatas crocantes com ervas e molho especial.', img: 'https://images.unsplash.com/photo-1576107246532-6a6c0c29ceb6?w=400&q=80' },
    { id: 3, categoria: 'hamburgueres', nome: 'Brasa Burger', preco: 38.00, desc: 'Pão brioche, hambúrguer artesanal, cheddar, cebola caramelizada.', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80' },
    { id: 4, categoria: 'hamburgueres', nome: 'Classic Burger', preco: 34.00, desc: 'Pão brioche, carne artesanal, queijo, alface, tomate.', img: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80' },
    { id: 5, categoria: 'carnes', nome: 'Picanha na Brasa', preco: 69.00, desc: 'Picanha grelhada acompanhada de arroz, farofa e vinagrete.', img: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=400&q=80' },
    { id: 6, categoria: 'carnes', nome: 'Ancho Especial', preco: 75.00, desc: 'Corte de ancho grelhado servido com batatas rústicas.', img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80' },
    { id: 7, categoria: 'massas', nome: 'Fettuccine Cremoso', preco: 42.00, desc: 'Massa artesanal com molho cremoso e parmesão.', img: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&q=80' },
    { id: 8, categoria: 'massas', nome: 'Penne ao Molho da Casa', preco: 39.00, desc: 'Penne com molho especial e ingredientes selecionados.', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80' },
    { id: 9, categoria: 'porcoes', nome: 'Frango Crocante', preco: 32.00, desc: 'Tiras de frango empanadas com molho especial.', img: 'https://images.unsplash.com/photo-1626082896492-766af4eb65ed?w=400&q=80' },
    { id: 10, categoria: 'porcoes', nome: 'Costela BBQ', preco: 45.00, desc: 'Costela desfiada ao molho barbecue.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80' },
    { id: 11, categoria: 'sobremesas', nome: 'Brownie com Sorvete', preco: 26.00, desc: 'Brownie de chocolate acompanhado de sorvete de creme.', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80' },
    { id: 12, categoria: 'sobremesas', nome: 'Cheesecake da Casa', preco: 24.00, desc: 'Cheesecake cremoso com calda de frutas vermelhas.', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80' },
    { id: 13, categoria: 'bebidas', nome: 'Refrigerante', preco: 7.00, desc: 'Lata 350ml.', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80' },
    { id: 14, categoria: 'bebidas', nome: 'Suco Natural', preco: 10.00, desc: 'Laranja, Limão ou Morango.', img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80' },
    { id: 15, categoria: 'bebidas', nome: 'Água', preco: 5.00, desc: 'Com ou sem gás.', img: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400&q=80' }
];

const galeriaImagens = [
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', // Carne
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80', // Hambúrguer
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', // Interior
    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80', // Drinks
    'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80', // Prato
    'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80', // Cozinha
    'https://images.unsplash.com/photo-1588675646184-f5b0b0b0b2de?w=600&q=80', // Equipe
    'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80', // Sobremesa
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80'  // Ambiente Noturno
];

// Estado do Carrinho
let cart = [];
let currentModalItem = null;

// ==========================================================
// Inicialização
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initGaleria();
    initScrollAnimations();
    initHeaderScroll();
    initMobileMenu();
    initSlider();
    initFormReserva();
});

// ==========================================================
// Header e Navegação
// ==========================================================
function initHeaderScroll() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-btn');
    const menu = document.getElementById('nav-menu');
    const links = document.querySelectorAll('.nav-links a');

    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('active'));
    });
}

// ==========================================================
// Renderização do Cardápio
// ==========================================================
function renderMenu(items) {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';
    
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item fade-up visible';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.nome}" loading="lazy">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3>${item.nome}</h3>
                    <span class="preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
                </div>
                <p>${item.desc}</p>
                <button class="btn-primary full-width" onclick="openProductModal('${item.nome}', ${item.preco}, '${item.desc}', '${item.img}')">PEDIR</button>
            </div>
        `;
        grid.appendChild(div);
    });
}

function initMenu() {
    renderMenu(menuData);
    
    const btns = document.querySelectorAll('.filtro-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            btns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const category = e.target.getAttribute('data-filter');
            if (category === 'todos') {
                renderMenu(menuData);
            } else {
                const filtered = menuData.filter(item => item.categoria === category);
                renderMenu(filtered);
            }
        });
    });
}

// ==========================================================
// Modal de Produto e Carrinho
// ==========================================================
function formatCurrency(value) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

function openProductModal(nome, preco, desc, img) {
    currentModalItem = { nome, preco, img };
    
    document.getElementById('modal-title').textContent = nome;
    document.getElementById('modal-price').textContent = formatCurrency(preco);
    document.getElementById('modal-desc').textContent = desc;
    document.getElementById('modal-img').src = img;
    
    document.getElementById('modal-qty').textContent = '1';
    document.getElementById('modal-obs').value = '';
    
    document.getElementById('product-modal').classList.add('active');
}

function updateModalQty(change) {
    const qtySpan = document.getElementById('modal-qty');
    let qty = parseInt(qtySpan.textContent) + change;
    if (qty < 1) qty = 1;
    qtySpan.textContent = qty;
}

function addToCartFromModal() {
    const qty = parseInt(document.getElementById('modal-qty').textContent);
    const obs = document.getElementById('modal-obs').value.trim();
    
    const existingItem = cart.find(i => i.nome === currentModalItem.nome && i.obs === obs);
    
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({
            nome: currentModalItem.nome,
            preco: currentModalItem.preco,
            qty: qty,
            obs: obs
        });
    }
    
    closeModals();
    updateCartUI();
    toggleCart(); // Abre o carrinho automaticamente
}

function updateCartUI() {
    const count = document.getElementById('cart-count');
    const itemsContainer = document.getElementById('cart-items');
    const totalPrice = document.getElementById('cart-total-price');
    
    // Total Items
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    count.textContent = totalItems;
    
    // Render Items
    itemsContainer.innerHTML = '';
    let total = 0;
    
    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p style="text-align:center; color:#666;">Seu carrinho está vazio.</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.preco * item.qty;
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.qty}x ${item.nome}</h4>
                    <p>${formatCurrency(item.preco)} cada</p>
                    ${item.obs ? `<p><em>Obs: ${item.obs}</em></p>` : ''}
                </div>
                <div class="cart-item-actions">
                    <button onclick="changeCartItemQty(${index}, -1)" style="padding: 2px 8px; font-weight:bold;">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeCartItemQty(${index}, 1)" style="padding: 2px 8px; font-weight:bold;">+</button>
                    <button onclick="removeCartItem(${index})" style="color: red; margin-left:10px;">🗑️</button>
                </div>
            `;
            itemsContainer.appendChild(div);
        });
    }
    
    totalPrice.textContent = formatCurrency(total);
}

function changeCartItemQty(index, change) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
    document.getElementById('cart-overlay').classList.toggle('active');
}

function closeModals() {
    document.getElementById('product-modal').classList.remove('active');
}

// Finalizar Pedido via WhatsApp
function finishOrder() {
    if (cart.length === 0) {
        alert("Adicione produtos ao carrinho primeiro!");
        return;
    }
    
    let text = "Olá! Gostaria de pedir:\n\n";
    let subtotal = 0;
    
    cart.forEach(item => {
        text += `${item.qty}x ${item.nome} (${formatCurrency(item.preco * item.qty)})\n`;
        if (item.obs) text += `Observação: ${item.obs}\n`;
        subtotal += item.preco * item.qty;
    });
    
    text += `\n*Subtotal: ${formatCurrency(subtotal)}*`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodedText}`, '_blank');
}

// ==========================================================
// Galeria & Lightbox
// ==========================================================
let currentLightboxIndex = 0;

function initGaleria() {
    const grid = document.getElementById('galeria-grid');
    galeriaImagens.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'Galeria Restaurante';
        img.className = 'galeria-item fade-up';
        img.loading = 'lazy';
        img.onclick = () => openLightbox(index);
        grid.appendChild(img);
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    document.getElementById('lightbox-img').src = galeriaImagens[index];
    document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function changeLightboxImage(direction) {
    currentLightboxIndex += direction;
    if (currentLightboxIndex < 0) currentLightboxIndex = galeriaImagens.length - 1;
    if (currentLightboxIndex >= galeriaImagens.length) currentLightboxIndex = 0;
    
    document.getElementById('lightbox-img').src = galeriaImagens[currentLightboxIndex];
}

// ==========================================================
// Slider Depoimentos
// ==========================================================
function initSlider() {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('slider-dots');
    
    let currentIndex = 0;
    let interval;
    
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
    
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetInterval();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }
    
    function startInterval() {
        interval = setInterval(nextSlide, 5000);
    }
    
    function resetInterval() {
        clearInterval(interval);
        startInterval();
    }
    
    document.getElementById('next-slide').onclick = () => { nextSlide(); resetInterval(); };
    document.getElementById('prev-slide').onclick = () => { prevSlide(); resetInterval(); };
    
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => clearInterval(interval));
    sliderContainer.addEventListener('mouseleave', startInterval);
    
    startInterval();
}

// ==========================================================
// Reserva WhatsApp
// ==========================================================
function initFormReserva() {
    const form = document.getElementById('form-reserva');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('res-nome').value;
        const dataStr = document.getElementById('res-data').value;
        const horario = document.getElementById('res-horario').value;
        const pessoas = document.getElementById('res-pessoas').value;
        const obs = document.getElementById('res-obs').value;
        
        // Formatar data para DD/MM/YYYY
        const [ano, mes, dia] = dataStr.split('-');
        const dataFormatada = `${dia}/${mes}/${ano}`;
        
        let text = `Olá! Gostaria de fazer uma reserva.\n`;
        text += `Nome: ${nome}\n`;
        text += `Data: ${dataFormatada}\n`;
        text += `Horário: ${horario}\n`;
        text += `Pessoas: ${pessoas}\n`;
        if (obs) text += `Observação: ${obs}\n`;
        
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${WA_NUMBER}?text=${encodedText}`, '_blank');
        
        form.reset();
    });
}

// ==========================================================
// Animações ao Scroll (Intersection Observer)
// ==========================================================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    elements.forEach(el => observer.observe(el));
}

// ==========================================================
// Acessibilidade Global
// ==========================================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModals();
        closeLightbox();
        if (document.getElementById('cart-sidebar').classList.contains('active')) {
            toggleCart();
        }
    }
});