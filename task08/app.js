
const routes = {
    home: `
      <h2>Welcome to the Home Page</h2>
      <p>This is the homepage of our simple SPA.</p>
    `,
    about: `
      <h2>About Us</h2>
      <p>This page tells you about our awesome SPA and how it works.</p>
    `,
    contact: `
      <h2>Contact</h2>
      <p>Feel free to reach out to us anytime!</p>
    `
};
  

function loadContent() {
    const hash = window.location.hash.substring(1) || 'home'; // default to 'home'
    const content = routes[hash] || `<h2>404 - Page Not Found</h2>`;
    document.getElementById('app').innerHTML = content;
  }
  

window.addEventListener('hashchange', loadContent);
  

window.addEventListener('DOMContentLoaded', loadContent);
  