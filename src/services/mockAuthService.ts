import { mockUsers } from '@/mocks/mockUsers';
import { AuthSession } from '@/types';
import { AppError } from '@/utils/AppError';

const DEMO_EMAIL = 'admin@demo.com';
const DEMO_PASSWORD = 'Password123';

export const mockAuthService = {
  async login(email: string, password: string): Promise<AuthSession> {
    if (email.toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      throw new AppError('Invalid demo credentials.', 'INVALID_CREDENTIALS');
    }

    const user = mockUsers.find((item) => item.email === DEMO_EMAIL);

    if (!user) {
      throw new AppError('Demo super admin user is missing.', 'DEMO_USER_MISSING');
    }

    return {
      token: 'mock-session-token',
      user,
      tenantId: user.tenantId,
      organizationId: user.organizationId,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString(),
    };
  },
  async forgotPassword(email: string): Promise<{ email: string; sent: boolean }> {
    return { email, sent: true };
  },
  async resetPassword(password: string): Promise<{ reset: boolean }> {
    return { reset: password.length >= 8 };
  },
};
