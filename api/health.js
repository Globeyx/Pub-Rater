import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
        return res.status(500).json({ error: 'Missing Supabase environment variables' });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
        const { data, error } = await supabase
            .from('pubs')
            .select('id')
            .limit(1);

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json({
            status: 'ok',
            message: 'Database pinged successfully',
            timestamp: new Date().toISOString(),
            data
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
