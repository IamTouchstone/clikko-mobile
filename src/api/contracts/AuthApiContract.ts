import { AuthDTO } from './dtos';

export interface AuthApiContract {
  login(email: string, password: string): Promise<AuthDTO>;
  forgotPassword(email: string): Promise<{ sent: boolean }>;
  resetPassword(password: string): Promise<{ reset: boolean }>;
}
