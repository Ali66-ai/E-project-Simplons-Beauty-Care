function updateCartBadge() {
    setTimeout(() => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

        let cartBadge = document.getElementById("cart-badge");
        if (cartBadge) {
            if (totalQuantity > 0) {
                cartBadge.style.display = "inline-block";
                cartBadge.innerText = totalQuantity;
            } else {
                cartBadge.style.display = "none";
            }
        }
    }, 500); // Delay of 500ms to ensure localStorage is loaded
}

document.addEventListener("DOMContentLoaded", function () {
    updateCartBadge();
});


document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".card-button");

    updateCartBadge();
    loadCart();

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            let productCard = button.closest(".card");
            let productName = productCard.querySelector(".card-title").innerText;
            let productPrice = productCard.querySelector(".card-text").innerText.trim();
            productPrice = parseFloat(productPrice.replace(/[^\d.]/g, ""));
            let productImage = productCard.querySelector(".card-img-top").src;

            let product = {
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            };

            addToCart(product);
        });
    });

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartBadge();

        Swal.fire({
            icon: "success",
            title: "Added to Cart!",
            html: `
                <img src="${product.image}" style="width:100px; border-radius:10px; margin:10px 0;">
                <p><strong>${product.name}</strong></p>
                <p>Price: ${product.price} PKR</p>
            `,
            confirmButtonColor: "#28a745",
        });
    }
});

function loadCart() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;

    if (!cartContainer) return;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = `<p style="text-align:center;">Your cart is empty. 😞</p>`;
        totalPriceElement.innerText = "0 PKR";
        updateCartBadge();
        return;
    }

    cartContainer.innerHTML = "";
    cartItems.forEach((item, index) => {
        let itemTotalPrice = parseFloat(item.price) * item.quantity;
        totalPrice += itemTotalPrice;

        cartContainer.innerHTML += `
            <div class="cart-item" id="cart-item-${index}">
                <img src="${item.image}" alt="Product Image">
                <p class="item-info">${item.name} - <strong>${itemTotalPrice.toFixed(2)} PKR</strong></p>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">➖</button>
                    <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">➕</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">🗑 Remove</button>
            </div>
        `;
    });

    totalPriceElement.innerText = totalPrice.toFixed(2) + " PKR";
    updateCartBadge();
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        Swal.fire({
            icon: "warning",
            title: "Invalid Quantity!",
            text: "Quantity cannot be less than 1.",
            confirmButtonColor: "#ffc107",
        });
        return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartBadge();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (index < 0 || index >= cart.length) return;
    let removedItem = cart[index].name;
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartBadge();

    Swal.fire({
        icon: "error",
        title: "Removed!",
        text: `${removedItem} has been removed from your cart.`,
        confirmButtonColor: "#ff4d4d",
    });
}

function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        Swal.fire({
            icon: "warning",
            title: "Your cart is empty!",
            text: "Please add some products before proceeding to checkout.",
            confirmButtonColor: "#ffc107",
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: "Checkout Successful!",
        text: "Your order has been placed. Thank you for shopping with us! 🎉",
        confirmButtonColor: "#28a745",
    }).then(() => {
        localStorage.removeItem("cart");
        loadCart();
        updateCartBadge();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    updateCartBadge();
});