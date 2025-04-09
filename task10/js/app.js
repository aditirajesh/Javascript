import { products } from '../data/products.js';
import { renderProducts, renderCart } from './dom.js';
import { applyFilters } from './filters.js';

let keyword = '';
let category = 'all';

function filterAndRender() {
  const filtered = applyFilters(products, keyword, category);
  renderProducts(filtered);
}

document.getElementById('searchInput').addEventListener('input', e => {
  keyword = e.target.value;
  filterAndRender();
});

document.getElementById('categoryFilter').addEventListener('change', e => {
  category = e.target.value;
  filterAndRender();
});

window.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  renderCart();
});
