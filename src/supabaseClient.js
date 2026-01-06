import { createClient } from '@supabase/supabase-js'

// Tyto proměnné musíme nastavit v souboru .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials!');
}

export const supabase = createClient(supabaseUrl, supabaseKey)
