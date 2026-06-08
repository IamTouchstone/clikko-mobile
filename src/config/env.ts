type RuntimeEnv = 'development' | 'staging' | 'production';

export interface EnvConfig {
  appName: string;
  env: RuntimeEnv;
  apiUrl: string;
  supabaseUrl: string;
  supabaseAnonKey: string;
}

const readRequired = (key: string): string => {
  const value = process.env[key]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

const parseRuntimeEnv = (value: string): RuntimeEnv => {
  if (value === 'development' || value === 'staging' || value === 'production') {
    return value;
  }

  throw new Error(`Invalid EXPO_PUBLIC_ENV "${value}". Expected development, staging, or production.`);
};

export const env: EnvConfig = {
  appName: readRequired('EXPO_PUBLIC_APP_NAME'),
  env: parseRuntimeEnv(readRequired('EXPO_PUBLIC_ENV')),
  apiUrl: readRequired('EXPO_PUBLIC_API_URL'),
  supabaseUrl: readRequired('EXPO_PUBLIC_SUPABASE_URL'),
  supabaseAnonKey: readRequired('EXPO_PUBLIC_SUPABASE_ANON_KEY'),
};
