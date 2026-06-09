import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { useStaffStore } from '@/store/staffStore';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { StaffStatus } from '@/types';

const filters: (StaffStatus | 'ALL')[] = [
  'ALL',
  'ACTIVE',
  'SUSPENDED',
  'ARCHIVED',
];

export function StaffListScreen() {
  const { query, setQuery, staff, statusFilter, setStatusFilter } = useStaffStore();
  const filteredStaff = useMemo(
    () =>
      staff.filter((member) => {
        const matchesQuery = `${member.fullName} ${member.department} ${member.employeeCode}`
          .toLowerCase()
          .includes(query.toLowerCase());
        const matchesStatus = statusFilter === 'ALL' || member.status === statusFilter;

        return matchesQuery && matchesStatus;
      }),
    [query, staff, statusFilter],
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Staff</Text>
      <TextInput
        placeholder="Search staff"
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
        value={query}
        onChangeText={setQuery}
      />
      <View style={styles.filters}>
        {filters.map((filter) => (
          <Pressable
            key={filter}
            style={[styles.filter, statusFilter === filter && styles.activeFilter]}
            onPress={() => setStatusFilter(filter)}>
            <Text style={[styles.filterText, statusFilter === filter && styles.activeFilterText]}>
              {filter.replace('_', ' ')}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.list}>
        {filteredStaff.map((member) => (
          <View key={member.id} style={styles.card}>
            <View>
              <Text style={styles.name}>{member.fullName}</Text>
              <Text style={styles.meta}>
                {member.employeeCode} / {member.department}
              </Text>
              <Text style={styles.meta}>{member.jobTitle}</Text>
            </View>
            <Text style={styles.status}>{member.status.replace('_', ' ')}</Text>
          </View>
        ))}
      </View>
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
  title: {
    color: colors.textPrimary,
    fontSize: 42,
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
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  filter: {
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  activeFilter: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    color: colors.textSecondary,
    fontWeight: '900',
  },
  activeFilterText: {
    color: colors.background,
  },
  list: {
    gap: spacing.md,
  },
  card: {
    minHeight: 112,
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
