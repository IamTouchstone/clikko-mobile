import { MD3DarkTheme } from 'react-native-paper';

import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

export const paperTheme = {
  ...MD3DarkTheme,
  roundness: 2,
  colors: {
    ...MD3DarkTheme.colors,
    primary: colors.primary,
    background: colors.background,
    surface: colors.surface,
    onSurface: colors.textPrimary,
    onBackground: colors.textPrimary,
    outline: colors.border,
  },
};

export const theme = {
  colors,
  spacing,
  typography,
};
