const basePrice = 1499;
let addRam = 0;
let addSsd = 0;
let cartItems = 0;

// Update Hero Image
function swap(el) {
    document.getElementById('hero-img').src = el.src;
    document.querySelectorAll('.t-item').forEach(img => img.classList.remove('active'));
    el.classList.add('active');
}

// Handle Configuration Logic
function setOpt(btn, type) {
    // UI Update: Remove active from siblings, add to clicked
    const siblings = btn.parentElement.querySelectorAll('.opt-btn');
    siblings.forEach(s => s.classList.remove('active'));
    btn.classList.add('active');

    // Logic Update: Get extra cost
    const extraPrice = parseInt(btn.getAttribute('data-price'));
    
    if (type === 'ram') addRam = extraPrice;
    if (type === 'ssd') addSsd = extraPrice;

    updatePrice();
}

function updatePrice() {
    const total = basePrice + addRam + addSsd;
    document.getElementById('display-price').innerText = total;
}

// Cart Feedback
document.getElementById('add-btn').addEventListener('click', function() {
    cartItems++;
    document.getElementById('cart-count').innerText = cartItems;
    
    this.innerText = "Processing...";
    this.style.opacity = "0.7";
    
    setTimeout(() => {
        this.innerText = "Added to Bag";
        this.style.background = "#1d1d1f";
        this.style.opacity = "1";
    }, 800);
});