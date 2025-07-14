const bar= document.getElementById('bar');
const close=document.getElementById('close');
const nav= document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}




// On index.html
document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll(".add-to-cart");

    cartButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            const product = {
                id: this.dataset.id,
                name: this.dataset.name,
                price: parseFloat(this.dataset.price),
                img: this.dataset.img,
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existing = cart.find(item => item.id === product.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} added to cart!`);
        });
    });
});

// On cart.html
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("cart.html")) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const tbody = document.querySelector("#cart tbody");
        const subtotalEl = document.querySelector("#subtotal table");
        tbody.innerHTML = "";

        let subtotal = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const row = `
                <tr data-index="${index}">
                    <td><a href="#" class="remove"><i class="ri-close-circle-line"></i></a></td>
                    <td><img src="${item.img}" alt=""></td>
                    <td>${item.name}</td>
                    <td>$${item.price}</td>
                    <td><input type="number" min="1" value="${item.quantity}" class="qty"></td>
                    <td>$${itemTotal.toFixed(2)}</td>
                </tr>
            `;
            tbody.insertAdjacentHTML("beforeend", row);
        });

        subtotalEl.innerHTML = `
            <tr><td>Cart Subtotal</td><td>$${subtotal.toFixed(2)}</td></tr>
            <tr><td>Shipping</td><td>Free</td></tr>
            <tr><td><strong>Total</strong></td><td><strong>$${subtotal.toFixed(2)}</strong></td></tr>
        `;

        // Handle quantity update
        document.querySelectorAll(".qty").forEach((input, idx) => {
            input.addEventListener("change", function () {
                const newQty = parseInt(this.value);
                cart[idx].quantity = newQty;
                localStorage.setItem("cart", JSON.stringify(cart));
                location.reload(); // reload to update subtotal
            });
        });

        // Handle remove
        document.querySelectorAll(".remove").forEach((btn, idx) => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                cart.splice(idx, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                location.reload();
            });
        });
    }
});

// sproduct.html
// Load existing cart or create new
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
    const existing = cart.find(p => p.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
}


document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: parseFloat(button.dataset.price),
            img: button.dataset.img
        };
        addToCart(product);
        alert("Added to cart!");
    });
});



