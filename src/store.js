const STORAGE_KEY = 'pub_rater_data_v7';

const initialPubs = [
  {
    id: 'b1',
    name: 'Hradecký Klenot',
    location: 'Velké náměstí 25, Hradec Králové',
    description: 'Brewery in the heart of the city, restoring the tradition of HK brewing.',
    rating: 4.8,
    reviews: 153,
    totalRatingScore: 734.4,
    image: '/public/images/pubs/klenot.png',
    mapUrl: 'https://maps.google.com/?q=Velké+náměstí+25,+Hradec+Králové',
    reviewsList: [
      { id: 'r1', rating: 5, text: 'Absolutely amazing beer and atmosphere! The interior is stunning.', date: '2023-10-15T14:30:00.000Z' },
      { id: 'r2', rating: 4, text: 'Great place but gets crowded on weekends.', date: '2023-10-12T18:00:00.000Z' },
      { id: 'r3', rating: 5, text: 'Best Lager in town, hands down. Highly recommend the 11°.', date: '2023-09-28T20:15:00.000Z' },
      { id: 'rX1', rating: 5, text: 'Staff was very attentive even during rush hour.', date: '2023-11-20T19:00:00.000Z' }
    ]
  },
  {
    id: 'b2',
    name: 'Rodinný pivovar 713',
    location: 'Hradec Králové - Kukleny',
    description: 'Family brewery specializing in honest craft lagers and specials.',
    rating: 4.7,
    reviews: 47,
    totalRatingScore: 220.9,
    image: null,
    mapUrl: 'https://maps.google.com/?q=Hradec+Králové+Kukleny+Pivovar+713',
    reviewsList: [
      { id: 'r4', rating: 5, text: 'Hidden gem in Kukleny. The owners are lovely people who care about beer.', date: '2023-11-01T16:00:00.000Z' },
      { id: 'r5', rating: 4, text: 'A bit out of the way, but worth the trip for the specials.', date: '2023-10-20T19:30:00.000Z' },
      { id: 'rX2', rating: 5, text: 'Their IPA is surprisingly good for a traditional lager brewery.', date: '2023-12-01T18:00:00.000Z' }
    ]
  },
  {
    id: 'b3',
    name: 'Pivovar Beránek',
    location: 'Stěžery (near HK)',
    description: 'Microbrewery offering unpasteurized beers like Jehně and Beran.',
    rating: 4.6,
    reviews: 98,
    totalRatingScore: 450.8,
    image: null,
    mapUrl: 'https://maps.google.com/?q=Pivovar+Beránek+Stěžery',
    reviewsList: [
      { id: 'r6', rating: 5, text: 'Their "Beran" dark lager is a must-try! Perfect balance.', date: '2023-10-05T15:45:00.000Z' },
      { id: 'r7', rating: 4, text: 'Nice garden for summer, cozy inside for winter.', date: '2023-09-10T12:00:00.000Z' },
      { id: 'r8', rating: 5, text: 'Great food to go with the beer.', date: '2023-11-12T13:30:00.000Z' }
    ]
  },
  {
    id: 'b4',
    name: 'Minipivovar Kubík',
    location: 'Profesora Smotlachy, Hradec Králové',
    description: 'Small local brewery focusing on quality ingredients.',
    rating: 4.5,
    reviews: 32,
    totalRatingScore: 144,
    image: null,
    mapUrl: 'https://maps.google.com/?q=Minipivovar+Kubík+Hradec+Králové',
    reviewsList: [
      { id: 'r9', rating: 4, text: 'Solid beers, though the menu is limited.', date: '2023-10-30T17:00:00.000Z' },
      { id: 'r10', rating: 5, text: 'Friendly staff and quick service.', date: '2023-11-05T18:20:00.000Z' }
    ]
  },
  {
    id: '1',
    name: 'Pivovarská Brána',
    location: 'Hradec Králové - Velké náměstí',
    description: 'Excellent beer in the heart of the city with a friendly environment.',
    rating: 4.7,
    reviews: 82,
    totalRatingScore: 385.4,
    image: null,
    mapUrl: 'https://maps.google.com/?q=Pivovarská+Brána+Hradec+Králové',
    reviewsList: [
      { id: 'r11', rating: 5, text: 'My favorite spot on the square. Always lively.', date: '2023-10-25T20:00:00.000Z' },
      { id: 'r12', rating: 4, text: 'Good selection of rotating taps from various breweries.', date: '2023-09-15T19:00:00.000Z' }
    ]
  },
  {
    id: '2',
    name: 'na JEDNO',
    location: 'Hradec Králové - Center',
    description: 'Beautiful little pub with vaulted ceilings, offering 5 taps of craft beer.',
    rating: 4.9,
    reviews: 58,
    totalRatingScore: 284.2,
    image: null,
    mapUrl: 'https://maps.google.com/?q=na+JEDNO+Hradec+Králové',
    reviewsList: [
      { id: 'r13', rating: 5, text: 'Incredible atmosphere. The vaulted ceilings are stunning.', date: '2023-11-20T21:00:00.000Z' },
      { id: 'r14', rating: 5, text: 'Top tier craft beer selection. Always something new.', date: '2023-11-10T18:00:00.000Z' },
      { id: 'r15', rating: 5, text: 'Best pub in HK. Period.', date: '2023-10-01T22:30:00.000Z' },
      { id: 'rX3', rating: 5, text: 'Small place but huge heart. Love the rotating taps.', date: '2023-12-05T20:00:00.000Z' }
    ]
  },
  {
    id: '3',
    name: 'Hostinec U Kohouta',
    location: 'Hradec Králové',
    description: 'Traditional Czech pub atmosphere offering classic pivo.',
    rating: 4.4,
    reviews: 120,
    totalRatingScore: 528,
    image: null,
    mapUrl: 'https://maps.google.com/?q=Hostinec+U+Kohouta+Hradec+Králové',
    reviewsList: [
      { id: 'r16', rating: 4, text: 'Classic Czech pub. Nothing fancy, just good beer.', date: '2023-10-18T16:45:00.000Z' },
      { id: 'r17', rating: 5, text: 'Great Pilsner Urquell on tap! It is treated well here.', date: '2023-09-22T19:15:00.000Z' }
    ]
  },
  {
    id: '4',
    name: 'Batalion u Draků',
    location: 'Hradec Králové - Old Town',
    description: 'Legendary underground spot with foosball, darts, and a cool vibe.',
    rating: 4.6,
    reviews: 200,
    totalRatingScore: 920,
    image: null,
    mapUrl: 'https://maps.google.com/?q=Batalion+u+Draků+Hradec+Králové',
    reviewsList: [
      { id: 'r18', rating: 5, text: 'Legendary spot. Great for late nights.', date: '2023-11-15T23:00:00.000Z' },
      { id: 'r19', rating: 4, text: 'Can get smoky, but the vibe is unmatched.', date: '2023-10-05T21:30:00.000Z' },
      { id: 'r20', rating: 5, text: 'Foosball tables are top notch!', date: '2023-11-01T20:00:00.000Z' }
    ]
  }
];

export const store = {
  getPubs() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialPubs));
      return initialPubs;
    }
    return JSON.parse(data);
  },

  addPub(pub) {
    const pubs = this.getPubs();
    const newPub = {
      ...pub,
      id: Date.now().toString(),
      rating: 0,
      reviews: 0,
      totalRatingScore: 0,
      reviewsList: []
    };
    pubs.unshift(newPub);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pubs));
    return newPub;
  },

  addRating(pubId, ratingValue, reviewText = '') {
    const pubs = this.getPubs();
    const pubIndex = pubs.findIndex(p => p.id === pubId);

    if (pubIndex > -1) {
      const pub = pubs[pubIndex];

      // Handle migration for old data
      const currentReviews = pub.reviews || 0;
      const currentTotalScore = pub.totalRatingScore || (pub.rating * currentReviews);
      const currentReviewsList = pub.reviewsList || [];

      const newReviews = currentReviews + 1;
      const newTotalScore = currentTotalScore + ratingValue;
      const newAverage = newTotalScore / newReviews;

      // Create new review object
      if (ratingValue > 0) {
        currentReviewsList.unshift({
          id: Date.now().toString(),
          rating: ratingValue,
          text: reviewText,
          date: new Date().toISOString()
        });
      }

      const updatedPub = {
        ...pub,
        reviews: newReviews,
        totalRatingScore: newTotalScore,
        rating: parseFloat(newAverage.toFixed(1)),
        reviewsList: currentReviewsList
      };

      pubs[pubIndex] = updatedPub;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pubs));
      return updatedPub;
    }
  }
};
