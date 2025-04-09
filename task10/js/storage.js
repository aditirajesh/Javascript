const CART_KEY = 'cart';

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function loadCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : {};
}
