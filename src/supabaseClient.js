import { createClient } from '@supabase/supabase-js'

console.log('--- DEBUG SUPABASE CONFIG ---');
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('URL:', supabaseUrl);
// Logujeme jen délku klíče pro kontrolu, nevypisujeme ho celý z bezpečnostních důvodů
console.log('KEY:', supabaseKey ? `Present (Length: ${supabaseKey.length})` : 'MISSING');

if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase credentials missing!');
    if (typeof window !== 'undefined') {
        // Zpožděný alert aby se stihl vykreslit DOM
        setTimeout(() => alert('CHYBA: Chybí nastavení Vercel Environment Variables!\nZkontroluj Settings na Vercelu.'), 1000);
    }
}

// Fallback aby app nespadla hned při startu
export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseKey || 'placeholder')
