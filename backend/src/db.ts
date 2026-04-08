import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.warn('Faltan credenciales de Supabase en el archivo .env, por favor configúralas.');
}

// empezar conexion supabase
export const supabase = createClient(supabaseUrl, supabaseKey);
