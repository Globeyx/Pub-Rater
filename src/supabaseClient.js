import { createClient } from '@supabase/supabase-js'

// Tyto proměnné musíme nastavit v souboru .env (lokálně) nebo v Settings na Vercelu (produkce)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials!');
    // Zobrazíme alert, aby to uživatel hned viděl na webu
    if (typeof window !== 'undefined') {
        window.alert('CHYBA KONFIGURACE:\n\nChybí VITE_SUPABASE_URL nebo VITE_SUPABASE_ANON_KEY.\n\nZkontroluj "Environment Variables" ve Vercel Settings.');
    }
}

// Fallback na prázdný string, aby aplikace nespadla hned, ale vyhodila error při dotazu
export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseKey || 'placeholder')
