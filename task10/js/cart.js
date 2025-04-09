import { saveCart, loadCart } from './storage.js';

let cart = loadCart();

export function getCart() {
  return cart;
}

export function addToCart(product) {
  if (cart[product.id]) {
    cart[product.id].quantity += 1;
  } else {
    cart[product.id] = { ...product, quantity: 1 };
  }
  saveCart(cart);
}

export function updateQuantity(productId, qty) {
  if (cart[productId]) {
    cart[productId].quantity = qty;
    if (qty === 0) {
      delete cart[productId];
    }
    saveCart(cart);
  }
}

export function calculateTotal() {
  let subtotal = 0;
  for (let id in cart) {
    subtotal += cart[id].price * cart[id].quantity;
  }
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  return { subtotal, tax, total };
}
