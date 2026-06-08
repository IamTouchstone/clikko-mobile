import { create } from 'zustand';

import { mockAuthService } from '@/services/mockAuthService';
import { AuthSession } from '@/types';
import { toAppError } from '@/utils/errors';

interface AuthState {
  session: AuthSession | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  isLoading: false,
  error: null,
  login: async (email, password) => {
    set({ isLoading: true, error: null });

    try {
      const session = await mockAuthService.login(email, password);
      set({ session, isLoading: false });
    } catch (error) {
      set({ error: toAppError(error).message, isLoading: false });
    }
  },
  logout: () => set({ session: null, error: null }),
}));
