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
const reviewTextInput = document.getElementById('reviewTextInput');
const stars = starRatingEl ? starRatingEl.querySelectorAll('.star') : [];

// Reviews Modal Elements
const reviewsModal = document.getElementById('reviewsModal');
const closeReviewsBtn = document.getElementById('closeReviewsBtn');
const reviewsContainer = document.getElementById('reviewsContainer');

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
        ${pub.reviews} Reviews
      </span>
      <span class="reviews-trigger" data-id="${pub.id}" style="font-size: 0.85rem; color: var(--primary); margin-right: auto; margin-left: 12px;">
        Read Reviews
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

  // No need to attach individual listeners anymore
}

// Event Delegation for Pub List
pubListEl.addEventListener('click', (e) => {
  const rateBtn = e.target.closest('.rate-btn');
  const reviewsBtn = e.target.closest('.reviews-trigger');

  if (rateBtn) {
    const pubId = rateBtn.getAttribute('data-id');
    openRateModal(pubId);
  }

  if (reviewsBtn) {
    const pubId = reviewsBtn.getAttribute('data-id');
    console.log('Opening reviews for:', pubId); // Debug log
    openReviewsModal(pubId);
  }
});

function openReviewsModal(pubId) {
  const pubs = store.getPubs();
  const pub = pubs.find(p => p.id === pubId);

  if (pub) {
    const reviews = pub.reviewsList || [];
    reviewsContainer.innerHTML = '';

    if (reviews.length === 0) {
      reviewsContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">No reviews yet.</p>';
    } else {
      reviews.forEach(review => {
        const date = new Date(review.date).toLocaleDateString();
        const reviewEl = document.createElement('div');
        reviewEl.className = 'review-item';
        reviewEl.innerHTML = `
          <div class="review-header">
            <span class="review-rating">★ ${review.rating}</span>
            <span class="review-date">${date}</span>
          </div>
          <p class="review-text">${review.text || 'No text review.'}</p>
        `;
        reviewsContainer.appendChild(reviewEl);
      });
    }

    reviewsModal.classList.add('active');
  }
}

function closeReviewsModal() {
  reviewsModal.classList.remove('active');
}

closeReviewsBtn?.addEventListener('click', closeReviewsModal);
reviewsModal?.addEventListener('click', (e) => {
  if (e.target === reviewsModal) closeReviewsModal();
});

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
  const reviewText = reviewTextInput.value;

  if (pubId && rating) {
    store.addRating(pubId, rating, reviewText);
    renderApp();
    closeRateModal();
  }
});

// Initial Render
renderApp();
