const STORAGE_KEY = 'pub_rater_data_v3';

const initialPubs = [
  {
    id: 'b1',
    name: 'Hradecký Klenot',
    location: 'Velké náměstí 25, Hradec Králové',
    description: 'Brewery in the heart of the city, restoring the tradition of HK brewing.',
    rating: 4.8,
    reviews: 150,
    totalRatingScore: 720
  },
  {
    id: 'b2',
    name: 'Rodinný pivovar 713',
    location: 'Hradec Králové - Kukleny',
    description: 'Family brewery specializing in honest craft lagers and specials.',
    rating: 4.7,
    reviews: 45,
    totalRatingScore: 211.5
  },
  {
    id: 'b3',
    name: 'Pivovar Beránek',
    location: 'Stěžery (near HK)',
    description: 'Microbrewery offering unpasteurized beers like Jehně and Beran.',
    rating: 4.6,
    reviews: 98,
    totalRatingScore: 450.8
  },
  {
    id: 'b4',
    name: 'Minipivovar Kubík',
    location: 'Profesora Smotlachy, Hradec Králové',
    description: 'Small local brewery focusing on quality ingredients.',
    rating: 4.5,
    reviews: 32,
    totalRatingScore: 144
  },
  {
    id: '1',
    name: 'Pivovarská Brána',
    location: 'Hradec Králové - Velké náměstí',
    description: 'Excellent beer in the heart of the city with a friendly environment.',
    rating: 4.7,
    reviews: 82,
    totalRatingScore: 385.4
  },
  {
    id: '2',
    name: 'na JEDNO',
    location: 'Hradec Králové - Center',
    description: 'Beautiful little pub with vaulted ceilings, offering 5 taps of craft beer.',
    rating: 4.9,
    reviews: 56,
    totalRatingScore: 274.4
  },
  {
    id: '3',
    name: 'Hostinec U Kohouta',
    location: 'Hradec Králové',
    description: 'Traditional Czech pub atmosphere offering classic pivo.',
    rating: 4.4,
    reviews: 120,
    totalRatingScore: 528
  },
  {
    id: '4',
    name: 'Batalion u Draků',
    location: 'Hradec Králové - Old Town',
    description: 'Legendary underground spot with foosball, darts, and a cool vibe.',
    rating: 4.6,
    reviews: 200,
    totalRatingScore: 920
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
      totalRatingScore: 0 // New field to help calculate average
    };
    pubs.unshift(newPub);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pubs));
    return newPub;
  },

  addRating(pubId, ratingValue) {
    const pubs = this.getPubs();
    const pubIndex = pubs.findIndex(p => p.id === pubId);

    if (pubIndex > -1) {
      const pub = pubs[pubIndex];

      // Handle migration for old data if needed or initialize
      const currentReviews = pub.reviews || 0;
      const currentTotalScore = pub.totalRatingScore || (pub.rating * currentReviews);

      const newReviews = currentReviews + 1;
      const newTotalScore = currentTotalScore + ratingValue;
      const newAverage = newTotalScore / newReviews;

      const updatedPub = {
        ...pub,
        reviews: newReviews,
        totalRatingScore: newTotalScore,
        rating: parseFloat(newAverage.toFixed(1))
      };

      pubs[pubIndex] = updatedPub;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pubs));
      return updatedPub;
    }
  }
};
