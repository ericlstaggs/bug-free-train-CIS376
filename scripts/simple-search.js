// Simple search script that uses demo data from data.js
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');
const searchMessage = document.getElementById('searchMessage');

function renderSearchResults(items) {
  searchResults.innerHTML = '';
  if (!items || items.length === 0) {
    searchResults.innerHTML = '<li>No results found.</li>';
    return;
  }
  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'search-item';
    li.textContent = item;
    searchResults.appendChild(li);
  });
}

function performSearch() {
  if (!window.jsObjectData && !window.jsArrayData) {
    searchMessage.textContent = 'Demo data not loaded.';
    return;
  }
  const q = (searchInput.value || '').trim().toLowerCase();
  if (!q) {
    searchMessage.textContent = 'Type to search demo data';
    renderSearchResults([]);
    return;
  }

  const arrayMatches = (window.jsArrayData || []).filter(s => s.toLowerCase().includes(q));

  const objectMatches = (window.jsObjectData || []).filter(o => {
    // check common fields and all values as fallback
    if (o.app && String(o.app).toLowerCase().includes(q)) return true;
    if (o.action && String(o.action).toLowerCase().includes(q)) return true;
    return Object.values(o).some(v => String(v).toLowerCase().includes(q));
  }).map(o => `${o.app}: ${o.action}`);

  const combined = [...objectMatches, ...arrayMatches];
  searchMessage.textContent = combined.length ? `Found ${combined.length} result(s)` : `No results for: ${q}`;
  renderSearchResults(combined);
}

searchInput.addEventListener('input', performSearch);
searchButton.addEventListener('click', performSearch);

// initial message
searchMessage.textContent = 'Type to search demo data';
