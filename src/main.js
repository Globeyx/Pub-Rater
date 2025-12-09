import { store } from './store.js';

// DOM Elements
const pubListEl = document.getElementById('pubList');
const addPubBtn = document.getElementById('addPubBtn');
const addPubModal = document.getElementById('addPubModal');
const addPubForm = document.getElementById('addPubForm');
const cancelBtn = document.getElementById('cancelBtn');

// Rate Modal Elements
const ratePubModal = document.getElementById('ratePubModal');
const ratePubForm = document.getElementById('ratePubForm');
const cancelRateBtn = document.getElementById('cancelRateBtn');
const starRatingEl = document.getElementById('starRating');
const ratingInput = document.getElementById('ratingInput');
const ratePubIdInput = document.getElementById('ratePubId');
const stars = starRatingEl ? starRatingEl.querySelectorAll('.star') : [];

// Render Logic
function renderPubCard(pub) {
  const card = document.createElement('div');
  card.className = 'pub-card';
  card.innerHTML = `
    <div class="pub-header">
      <div>
        <h3 class="pub-name">${pub.name}</h3>
        <span class="pub-location">📍 ${pub.location}</span>
      </div>
      <div class="rating-badge">
        ★ ${pub.rating > 0 ? pub.rating.toFixed(1) : '-'}
      </div>
    </div>
    <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 16px;">${pub.description}</p>
    <div class="pub-reviews" style="display: flex; justify-content: space-between; align-items: center;">
      <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
        ${pub.reviews} Reviews
      </span>
      <button class="btn rate-btn" data-id="${pub.id}" style="padding: 6px 12px; font-size: 0.85rem;">Rate Pub</button>
    </div>
  `;
  return card;
}

function renderApp() {
  const pubs = store.getPubs();
  pubListEl.innerHTML = '';
  pubs.forEach(pub => {
    pubListEl.appendChild(renderPubCard(pub));
  });

  // Attach event listeners to new dynamic buttons
  document.querySelectorAll('.rate-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pubId = e.target.getAttribute('data-id');
      openRateModal(pubId);
    });
  });
}

// Modal Logic
function openRateModal(pubId) {
  ratePubIdInput.value = pubId;
  ratePubModal.classList.add('active');
  // Reset stars
  updateStarDisplay(0);
  ratingInput.value = '';
}

function closeRateModal() {
  ratePubModal.classList.remove('active');
  ratePubForm.reset();
  updateStarDisplay(0);
}

function updateStarDisplay(rating) {
  stars.forEach(star => {
    const starRating = parseInt(star.getAttribute('data-rating'));
    if (starRating <= rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

// Event Listeners - Add Pub
addPubBtn?.addEventListener('click', () => {
  addPubModal.classList.add('active');
});

function closeAddModal() {
  addPubModal.classList.remove('active');
  addPubForm.reset();
}

cancelBtn?.addEventListener('click', closeAddModal);

addPubModal?.addEventListener('click', (e) => {
  if (e.target === addPubModal) closeAddModal();
});

addPubForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(addPubForm);
  const newPub = {
    name: formData.get('name'),
    location: formData.get('location'),
    description: formData.get('description')
  };

  store.addPub(newPub);
  renderApp();
  closeAddModal();
});

// Event Listeners - Rate Pub
cancelRateBtn?.addEventListener('click', closeRateModal);

ratePubModal?.addEventListener('click', (e) => {
  if (e.target === ratePubModal) closeRateModal();
});

starRatingEl?.addEventListener('click', (e) => {
  if (e.target.classList.contains('star')) {
    const rating = parseInt(e.target.getAttribute('data-rating'));
    ratingInput.value = rating;
    updateStarDisplay(rating);
  }
});

ratePubForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const pubId = ratePubIdInput.value;
  const rating = parseInt(ratingInput.value);

  if (pubId && rating) {
    store.addRating(pubId, rating);
    renderApp();
    closeRateModal();
  }
});

// Initial Render
renderApp();
