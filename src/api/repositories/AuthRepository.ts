import { AuthApiContract } from '@/api/contracts/AuthApiContract';
import { AuthDTO } from '@/api/contracts/dtos';

export class AuthRepository implements AuthApiContract {
  constructor(private readonly api: AuthApiContract) {}

  login(email: string, password: string): Promise<AuthDTO> {
    return this.api.login(email, password);
  }

  forgotPassword(email: string): Promise<{ sent: boolean }> {
    return this.api.forgotPassword(email);
  }

  resetPassword(password: string): Promise<{ reset: boolean }> {
    return this.api.resetPassword(password);
  }
}
