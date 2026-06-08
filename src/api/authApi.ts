import { mockAuthService } from '@/services/mockAuthService';

export const authApi = {
  login: mockAuthService.login,
  forgotPassword: mockAuthService.forgotPassword,
  resetPassword: mockAuthService.resetPassword,
};
