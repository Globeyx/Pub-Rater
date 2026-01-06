import { supabase } from './supabaseClient.js';

export const store = {
  // Stav aplikace (lokální cache)
  state: {
    pubs: []
  },

  // Načtení všech hospod z databáze
  async fetchPubs() {
    const { data, error } = await supabase
      .from('pubs')
      .select(`
        *,
        reviews (
          id,
          rating,
          text,
          created_at
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching pubs:', error);
      return [];
    }

    // Zpracování dat pro frontend (přidáme průměrné hodnocení, pokud není v DB kalkulováno)
    this.state.pubs = data.map(pub => {
      // Supabase vrací reviews jako pole objektů
      const reviewsList = pub.reviews || [];
      // Seřadíme recenze od nejnovější
      reviewsList.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      return {
        ...pub,
        reviewsList: reviewsList,
        // Pro zpětnou kompatibilitu s frontendem
        reviews: pub.reviews_count,
        rating: pub.rating
      };
    });

    return this.state.pubs;
  },

  getPubs() {
    return this.state.pubs;
  },

  async addPub(pubData) {
    // Vložíme do DB
    const { data, error } = await supabase
      .from('pubs')
      .insert([
        {
          name: pubData.name,
          location: pubData.location,
          description: pubData.description
        }
      ])
      .select();

    if (error) {
      console.error('Error adding pub:', error);
      alert('Failed to add pub');
      return null;
    }

    // Obnovíme lokální data
    await this.fetchPubs();
    return data[0];
  },

  async deletePub(pubId) {
    const { error } = await supabase
      .from('pubs')
      .delete()
      .eq('id', pubId);

    if (error) {
      console.error('Error deleting pub:', error);
      alert('Failed to delete pub');
      return;
    }

    // Obnovíme lokální data
    await this.fetchPubs();
  },

  async addRating(pubId, ratingValue, reviewText = '') {
    // 1. Vložit recenzi
    const { error: reviewError } = await supabase
      .from('reviews')
      .insert([
        {
          pub_id: pubId,
          rating: ratingValue,
          text: reviewText
        }
      ]);

    if (reviewError) {
      console.error('Error adding review:', reviewError);
      return;
    }

    // 2. Přepočítat průměr (naivně - ideálně by to dělala databázová funkce/trigger)
    // Pro jednoduchost teď jen znovu načteme celou hospodu a její recenze a spočítáme to
    // V produkci bychom použili RPC funkci nebo trigger v databázi.

    // Získáme aktuální data
    const { data: pubData } = await supabase
      .from('pubs')
      .select('rating, reviews_count, total_rating_score')
      .eq('id', pubId)
      .single();

    const newCount = (pubData.reviews_count || 0) + 1;
    const newTotalScore = (parseFloat(pubData.total_rating_score) || 0) + ratingValue;
    const newAverage = newTotalScore / newCount;

    // Aktualizujeme hospodu
    const { error: updateError } = await supabase
      .from('pubs')
      .update({
        rating: parseFloat(newAverage.toFixed(1)),
        reviews_count: newCount,
        total_rating_score: newTotalScore
      })
      .eq('id', pubId);

    if (updateError) {
      console.error('Error updating pub stats:', updateError);
    }

    // Obnovíme data v aplikaci
    await this.fetchPubs();
  }
};
