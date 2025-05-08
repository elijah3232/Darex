let cart = [];
let total = 0;

function addToCart(id, name, price) {
    const existingProduct = cart.find((item) => item.id === id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    total = 0;
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity} `;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(item.id);
        li.appendChild(removeButton);
        cartList.appendChild(li);
        total += item.price * item.quantity;
    });
    document.getElementById('total').textContent = `Total: $${total}`;
}

function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    updateCart();
}