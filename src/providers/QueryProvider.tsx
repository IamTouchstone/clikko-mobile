import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useMemo } from 'react';

export function QueryProvider({ children }: PropsWithChildren) {
  const queryClient = useMemo(() => new QueryClient(), []);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
