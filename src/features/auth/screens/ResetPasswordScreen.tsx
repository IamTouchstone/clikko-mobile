import { type Href, router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { mockAuthService } from '@/services/mockAuthService';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export function ResetPasswordScreen() {
  const [password, setPassword] = useState('Password123');
  const [reset, setReset] = useState(false);

  const handleSubmit = async () => {
    const response = await mockAuthService.resetPassword(password);
    setReset(response.reset);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        placeholder="New password"
        placeholderTextColor={colors.textSecondary}
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      {reset ? <Text style={styles.notice}>Mock password reset complete.</Text> : null}
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
      <Pressable onPress={() => router.replace('/login' as Href)}>
        <Text style={styles.link}>Return to login</Text>
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
