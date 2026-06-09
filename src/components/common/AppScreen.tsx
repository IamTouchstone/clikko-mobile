import { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

interface AppScreenProps extends PropsWithChildren {
  contentStyle?: ViewStyle;
}

export function AppScreen({ children, contentStyle }: AppScreenProps) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={[styles.content, contentStyle]}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    paddingTop: spacing.xxl,
    gap: spacing.lg,
  },
});
