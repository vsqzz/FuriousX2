document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded!");
    const cart = [];

    // Load items from the server and display them
    fetch('/api/items')
        .then(response => response.json())
        .then(items => {
            const itemsContainer = document.getElementById('items');
            items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'item';
                itemElement.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Price: $${item.price}</p>
                    <button onclick="addToCart(${item})">Add to Cart</button>
                `;
                itemsContainer.appendChild(itemElement);
            });
        });

    // Example function to add item to cart
    window.addToCart = function(item) {
        cart.push(item);
        console.log("Item added to cart:", item);
        updateCartUI();
    };

    // Example function to update the cart UI
    function updateCartUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
});
