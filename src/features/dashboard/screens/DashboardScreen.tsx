import { type Href, router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useAttendanceStore } from '@/store/attendanceStore';
import { useAuthStore } from '@/store/authStore';
import { useOrganizationStore } from '@/store/organizationStore';
import { useStaffStore } from '@/store/staffStore';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import type { AttendanceStatus } from '@/types';

const today = new Date('2026-06-08T12:00:00.000Z')
  .toISOString()
  .slice(0, 10);

type DashboardStat = {
  label: string;
  value: number;
  status?: AttendanceStatus;
};

export function DashboardScreen() {
  const { currentOrganization } = useOrganizationStore();

  const staff = useStaffStore((state) => state.staff);
  const attendance = useAttendanceStore((state) => state.attendance);

  const logout = useAuthStore((state) => state.logout);

  const todaysAttendance = attendance.filter(
    (record) => record.date === today
  );

  const handleLogout = () => {
    logout();
    router.replace('/login' as Href);
  };

  const stats: DashboardStat[] = [
    {
      label: 'Total Staff',
      value: staff.length,
    },
    {
      label: 'Present Today',
      status: 'PRESENT',
      value: todaysAttendance.filter(
        (item) => item.status === 'PRESENT'
      ).length,
    },
    {
      label: 'Absent Today',
      status: 'ABSENT',
      value: todaysAttendance.filter(
        (item) => item.status === 'ABSENT'
      ).length,
    },
    {
      label: 'Late Today',
      status: 'LATE',
      value: todaysAttendance.filter(
        (item) => item.status === 'LATE'
      ).length,
    },
    {
      label: 'Clocked In',
      status: 'CLOCKED_IN',
      value: todaysAttendance.filter(
        (item) => item.status === 'CLOCKED_IN'
      ).length,
    },
    {
      label: 'Clocked Out',
      status: 'CLOCKED_OUT',
      value: todaysAttendance.filter(
        (item) => item.status === 'CLOCKED_OUT'
      ).length,
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.kicker}>
            {currentOrganization?.name ?? 'CLIKKO'}
          </Text>

          <Text style={styles.title}>Dashboard</Text>
        </View>

        <Pressable
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </View>

      <View style={styles.grid}>
        {stats.map((stat) => (
          <View
            key={stat.label}
            style={styles.card}
          >
            <Text style={styles.statValue}>
              {stat.value}
            </Text>

            <Text style={styles.statLabel}>
              {stat.label}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>
        Recent Attendance
      </Text>

      <View style={styles.list}>
        {attendance.slice(0, 8).map((record) => (
          <View
            key={record.id}
            style={styles.row}
          >
            <View>
              <Text style={styles.name}>
                {record.staffName}
              </Text>

              <Text style={styles.meta}>
                {record.date}
              </Text>
            </View>

            <Text style={styles.status}>
              {record.status}
            </Text>
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

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },

  kicker: {
    color: colors.textSecondary,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 0,
  },

  logoutButton: {
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  logoutText: {
    color: colors.primary,
    fontWeight: '900',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },

  card: {
    width: '47%',
    minHeight: 116,
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },

  statValue: {
    color: colors.primary,
    fontSize: 36,
    fontWeight: '900',
  },

  statLabel: {
    color: colors.textSecondary,
    fontWeight: '700',
  },

  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '900',
  },

  list: {
    gap: spacing.sm,
  },

  row: {
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
    backgroundColor: colors.surface,
    padding: spacing.md,
  },

  name: {
    color: colors.textPrimary,
    fontWeight: '800',
  },

  meta: {
    color: colors.textSecondary,
  },

  status: {
    color: colors.primary,
    fontWeight: '900',
  },
});