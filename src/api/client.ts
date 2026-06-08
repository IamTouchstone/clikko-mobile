import { create } from 'axios';

import { env } from '@/config/env';

export const apiClient = create({
  baseURL: env.apiUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});
