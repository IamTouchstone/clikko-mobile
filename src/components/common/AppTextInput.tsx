import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export function AppTextInput(props: TextInputProps) {
  return <TextInput placeholderTextColor={colors.textSecondary} style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    minHeight: 56,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    color: colors.textPrimary,
    paddingHorizontal: spacing.lg,
    fontSize: 16,
  },
});
