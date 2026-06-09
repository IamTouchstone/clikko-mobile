import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { Staff } from '@/types';

interface StaffCardProps {
  staff: Staff;
  onPress?: () => void;
}

export function StaffCard({ staff, onPress }: StaffCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.name}>{staff.fullName}</Text>
        <Text style={styles.meta}>
          {staff.staffId} / {staff.department}
        </Text>
        <Text style={styles.meta}>{staff.position}</Text>
      </View>
      <Text style={styles.status}>{staff.status}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 104,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  name: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '900',
  },
  meta: {
    color: colors.textSecondary,
  },
  status: {
    color: colors.primary,
    fontWeight: '900',
  },
});
