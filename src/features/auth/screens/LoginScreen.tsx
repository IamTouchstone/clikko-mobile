import { type Href, Link, router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { useAuthStore } from '@/store/authStore';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export function LoginScreen() {
  const [email, setEmail] = useState('admin@demo.com');
  const [password, setPassword] = useState('Password123');
  const { error, isLoading, login } = useAuthStore();

  const handleSubmit = async () => {
    await login(email, password);

    if (useAuthStore.getState().session) {
      router.replace('/(tabs)' as Href);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <View style={styles.brandBlock}>
        <Text style={styles.brand}>CLIKKO</Text>
        <Text style={styles.subtitle}>Tenant attendance command center</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={colors.textSecondary}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.textSecondary}
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Pressable style={styles.button} onPress={handleSubmit} disabled={isLoading}>
          <Text style={styles.buttonText}>{isLoading ? 'Signing in' : 'Sign in'}</Text>
        </Pressable>
        <View style={styles.links}>
          <Link href={'/forgot-password' as Href} style={styles.link}>
            Forgot password
          </Link>
          <Link href={'/reset-password' as Href} style={styles.link}>
            Reset password
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing.xxl,
    padding: spacing.xl,
    backgroundColor: colors.background,
  },
  brandBlock: {
    gap: spacing.sm,
  },
  brand: {
    color: colors.primary,
    fontSize: 72,
    fontWeight: '900',
    letterSpacing: 0,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
  },
  form: {
    gap: spacing.md,
  },
  input: {
    minHeight: 56,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    color: colors.textPrimary,
    paddingHorizontal: spacing.lg,
    fontSize: 16,
  },
  button: {
    minHeight: 58,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  error: {
    color: colors.danger,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: colors.primary,
  },
});
