// Sample fashion pieces with placeholder images from a fashion-forward source
const fashionPieces = [
    'https://source.unsplash.com/800x1200?model,fashion',
    'https://source.unsplash.com/800x1200?fashion,minimal',
    'https://source.unsplash.com/800x1200?model,elegant',
    'https://source.unsplash.com/800x1200?fashion,luxury',
    'https://source.unsplash.com/800x1200?model,style',
    'https://source.unsplash.com/800x1200?fashion,designer',
    'https://source.unsplash.com/800x1200?model,minimalist',
    'https://source.unsplash.com/800x1200?fashion,editorial',
    'https://source.unsplash.com/800x1200?model,haute'
];

// Initialize gallery
function initializeGallery() {
    const gallery = document.getElementById('gallery');
    
    fashionPieces.forEach(imageUrl => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "Fashion Piece";
        
        const price = document.createElement('div');
        price.className = 'price-tag';
        price.textContent = `$${Math.floor(Math.random() * (130 - 50 + 1) + 50)}`;
        
        item.appendChild(img);
        item.appendChild(price);
        gallery.appendChild(item);
    });
}

// Menu toggle functionality
function initializeMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

// Header scroll effect
function initializeHeaderScroll() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img');
    const imageOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    initializeMenu();
    initializeHeaderScroll();
    initializeLazyLoading();
}); 