
import { type Href, router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppScreen } from '@/components/common/AppScreen';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { useOrganizationStore } from '@/store/organizationStore';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export function OrganizationVerificationScreen() {
  const organization = useOrganizationStore((state) => state.lastRegisteredOrganization);

  return (
    <AppScreen contentStyle={styles.content}>
      <View style={styles.panel}>
        <Text style={styles.title}>Verification Pending</Text>
        <Text style={styles.body}>
          Super Admin credentials have been queued for{' '}
          {organization?.email ?? 'the organization email'}.
        </Text>
        <Text style={styles.body}>Organization successfully created.</Text>
      </View>
      <PrimaryButton
  label="Go to Login"
  onPress={() =>
    router.replace('/organization-login' as Href)
  }
/>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
  },
  panel: {
    gap: spacing.md,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.xl,
  },
  title: {
    color: colors.primary,
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 0,
  },
  body: {
    color: colors.textSecondary,
    fontSize: 16,
  },
});
