import { type Href, Redirect } from 'expo-router';

import { useAuthStore } from '@/store/authStore';

export default function IndexRoute() {
  const session = useAuthStore((state) => state.session);

  return <Redirect href={(session ? '/(tabs)' : '/login') as Href} />;
}
