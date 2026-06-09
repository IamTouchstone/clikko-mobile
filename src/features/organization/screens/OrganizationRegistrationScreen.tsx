import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { AppScreen } from '@/components/common/AppScreen';
import { AppTextInput } from '@/components/common/AppTextInput';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { useOrganizationStore } from '@/store/organizationStore';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9\s-]{8,}$/;

export function OrganizationRegistrationScreen() {
  const registerOrganization = useOrganizationStore((state) => state.registerOrganization);
  const [form, setForm] = useState({
    name: '',
    email: '',
    contactPerson: '',
    phone: '',
    country: '',
    numberOfEmployees: '',
  });

  const updateField = (key: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const validate = () => {
    if (Object.values(form).some((value) => !value.trim())) {
      return 'All fields are required.';
    }

    if (!emailPattern.test(form.email)) {
      return 'Enter a valid organization email.';
    }

    if (!phonePattern.test(form.phone)) {
      return 'Enter a valid phone number.';
    }

    if (Number.isNaN(Number(form.numberOfEmployees)) || Number(form.numberOfEmployees) <= 0) {
      return 'Number of employees must be greater than zero.';
    }

    return null;
  };

  const handleSubmit = async () => {
    const validationError = validate();

    if (validationError) {
      Alert.alert('Check registration form', validationError);
      return;
    }

    await registerOrganization({
      ...form,
      numberOfEmployees: Number(form.numberOfEmployees),
    });
    Alert.alert('Organization successfully created.');
    router.push('/organization-verification');
  };

  return (
    <AppScreen>
      <View>
        <Text style={styles.title}>Register Organization</Text>
        <Text style={styles.subtitle}>Create the tenant and prepare the Super Admin account.</Text>
      </View>
      <AppTextInput placeholder="Organization Name" value={form.name} onChangeText={(value) => updateField('name', value)} />
      <AppTextInput
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Organization Email"
        value={form.email}
        onChangeText={(value) => updateField('email', value)}
      />
      <AppTextInput
        placeholder="Contact Person"
        value={form.contactPerson}
        onChangeText={(value) => updateField('contactPerson', value)}
      />
      <AppTextInput
        keyboardType="phone-pad"
        placeholder="Phone Number"
        value={form.phone}
        onChangeText={(value) => updateField('phone', value)}
      />
      <AppTextInput placeholder="Country" value={form.country} onChangeText={(value) => updateField('country', value)} />
      <AppTextInput
        keyboardType="number-pad"
        placeholder="Number of Employees"
        value={form.numberOfEmployees}
        onChangeText={(value) => updateField('numberOfEmployees', value)}
      />
      <PrimaryButton label="Create Organization" onPress={handleSubmit} />
      <PrimaryButton label="Organization Login" variant="outline" onPress={() => router.push('/organization-login')} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.textPrimary,
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: 0,
  },
  subtitle: {
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },
});
