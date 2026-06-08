import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { PaperProvider } from 'react-native-paper';

import { navigationTheme } from '@/theme/navigationTheme';
import { paperTheme } from '@/theme';

export function AppThemeProvider({ children }: PropsWithChildren) {
  return (
    <PaperProvider theme={paperTheme}>
      <NavigationThemeProvider value={navigationTheme}>{children}</NavigationThemeProvider>
    </PaperProvider>
  );
}
