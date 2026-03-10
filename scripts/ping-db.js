import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
    console.error('❌ Error: SUPABASE_URL is missing.');
    process.exit(1);
}

if (!supabaseKey) {
    console.error('❌ Error: SUPABASE_SERVICE_ROLE_KEY is missing.');
    process.exit(1);
}

console.log('✅ Environment variables found.');
console.log(`URL: ${supabaseUrl.substring(0, 15)}...`);

const supabase = createClient(supabaseUrl, supabaseKey);

async function keepAlive() {
    console.log('📡 Pinging Supabase database...');

    try {
        const { data, error } = await supabase
            .from('pubs')
            .select('id')
            .limit(1);

        if (error) {
            console.error('❌ Supabase error:', error.message);
            console.error('Status code:', error.status);
            process.exit(1);
        }

        console.log('✅ Successfully pinged database.');
        console.log('DB response:', JSON.stringify(data));
    } catch (err) {
        console.error('❌ Unexpected error:', err.message);
        process.exit(1);
    }
}

keepAlive();
