import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { mockAuthService } from '@/services/mockAuthService';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export function ForgotPasswordScreen() {
  const [email, setEmail] = useState('admin@demo.com');
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    const response = await mockAuthService.forgotPassword(email);
    setSent(response.sent);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Organization email"
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      {sent ? <Text style={styles.notice}>Mock activation email queued.</Text> : null}
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send reset link</Text>
      </Pressable>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.link}>Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing.md,
    padding: spacing.xl,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 0,
  },
  input: {
    minHeight: 56,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    color: colors.textPrimary,
    paddingHorizontal: spacing.lg,
  },
  button: {
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.background,
    fontWeight: '900',
  },
  notice: {
    color: colors.success,
  },
  link: {
    color: colors.primary,
  },
});
