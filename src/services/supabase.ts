import { createClient } from '@supabase/supabase-js';

import { env } from '@/config/env';

export const createSupabaseClient = () => createClient(env.supabaseUrl, env.supabaseAnonKey);
