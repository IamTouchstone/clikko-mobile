import { AppError } from './AppError';

export const toAppError = (error: unknown, fallbackMessage = 'Something went wrong'): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError(error.message, 'UNKNOWN_ERROR', error);
  }

  return new AppError(fallbackMessage, 'UNKNOWN_ERROR', error);
};
