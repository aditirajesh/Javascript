import { addToCart, getCart, updateQuantity, calculateTotal } from './cart.js';

export function renderProducts(products) {
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="100%">
      <h4>${product.name}</h4>
      <p>${product.description}</p>
      <strong>$${product.price}</strong><br/>
      <button data-id="${product.id}">Add to Cart</button>
    `;
    list.appendChild(div);
    div.querySelector('button').onclick = () => {
      addToCart(product);
      renderCart();
    };
  });
}

export function renderCart() {
  const cartItems = getCart();
  const container = document.getElementById('cart-items');
  const summary = document.getElementById('cart-summary');
  const count = Object.values(cartItems).reduce((acc, item) => acc + item.quantity, 0);

  document.getElementById('cart-count').textContent = `🛒 (${count})`;

  container.innerHTML = '';
  Object.values(cartItems).forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${item.name} (x${item.quantity})</span>
      <input type="number" min="0" value="${item.quantity}" data-id="${item.id}" />
    `;
    container.appendChild(div);

    div.querySelector('input').onchange = (e) => {
      updateQuantity(item.id, parseInt(e.target.value));
      renderCart();
    };
  });

  const { subtotal, tax, total } = calculateTotal();
  summary.innerHTML = `
    <hr>
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Tax (10%): $${tax.toFixed(2)}</p>
    <h3>Total: $${total.toFixed(2)}</h3>
  `;
}
