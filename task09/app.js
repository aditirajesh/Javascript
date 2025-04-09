let currentPage = 1;
let isLoading = false;

function createCard(content) {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `<h3>Post #${content.id}</h3><p>${content.text}</p>`;
  return div;
}

// Simulated fetch function
function fetchMoreData(page) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = Array.from({ length: 10 }, (_, i) => ({
        id: (page - 1) * 10 + i + 1,
        text: 'This is some example content for infinite scrolling.'
      }));
      resolve(data);
    }, 1000);
  });
}

async function loadMoreContent() {
  if (isLoading) return;
  isLoading = true;
  document.getElementById('loader').style.display = 'block';

  const data = await fetchMoreData(currentPage);
  data.forEach(item => {
    document.getElementById('content').appendChild(createCard(item));
  });

  currentPage++;
  isLoading = false;
  document.getElementById('loader').style.display = 'none';
}

// Scroll detection
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isLoading) {
    loadMoreContent();
  }
});

// Initial load
loadMoreContent();
