import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'filled' | 'outline';
}

export function PrimaryButton({ label, onPress, variant = 'filled' }: PrimaryButtonProps) {
  const isOutline = variant === 'outline';

  return (
    <Pressable style={[styles.button, isOutline && styles.outline]} onPress={onPress}>
      <Text style={[styles.text, isOutline && styles.outlineText]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.primary,
  },
  outline: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    color: colors.background,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  outlineText: {
    color: colors.primary,
  },
});
