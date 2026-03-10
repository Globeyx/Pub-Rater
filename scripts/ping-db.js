import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function keepAlive() {
    console.log('Pinging Supabase database...');

    // A simple query to keep the database active
    const { data, error } = await supabase
        .from('pubs') // Assuming 'pubs' table exists based on previous work
        .select('id')
        .limit(1);

    if (error) {
        console.error('Error pinging database:', error.message);
        process.exit(1);
    }

    console.log('Successfully pinged database. Data received:', data);
    console.log('Supabase project is active.');
}

keepAlive();
