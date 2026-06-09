import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { AuthProvider } from '@/providers/AuthProvider';
import { QueryProvider } from '@/providers/QueryProvider';
import { AppThemeProvider } from '@/providers/ThemeProvider';

export default function RootLayout() {
  return (
    <QueryProvider>
      <AppThemeProvider>
        <AuthProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
            <Stack.Screen name="forgot-password" />
            <Stack.Screen name="reset-password" />
            <Stack.Screen name="organization-register" />
            <Stack.Screen name="organization-verification" />
            <Stack.Screen name="organization-login" />
            <Stack.Screen name="organization-forgot-password" />
            <Stack.Screen name="(tabs)" />
          </Stack>
          <StatusBar style="light" />
        </AuthProvider>
      </AppThemeProvider>
    </QueryProvider>
  );
}
