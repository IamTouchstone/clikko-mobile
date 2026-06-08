import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useAttendanceStore } from '@/store/attendanceStore';
import { useStaffStore } from '@/store/staffStore';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export function AttendanceHistoryScreen() {
  const attendance = useAttendanceStore((state) => state.attendance);
  const clockIn = useAttendanceStore((state) => state.clockIn);
  const firstActiveStaff = useStaffStore((state) => state.staff.find((member) => member.status === 'ACTIVE'));

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Attendance</Text>
          <Text style={styles.subtitle}>Clock events are generated from local mock services.</Text>
        </View>
        {firstActiveStaff ? (
          <Pressable style={styles.button} onPress={() => clockIn(firstActiveStaff.id)}>
            <Text style={styles.buttonText}>Clock in</Text>
          </Pressable>
        ) : null}
      </View>

      <View style={styles.list}>
        {attendance.map((record) => (
          <View key={record.id} style={styles.row}>
            <View style={styles.rowMain}>
              <Text style={styles.name}>{record.staffName}</Text>
              <Text style={styles.meta}>
                {record.date} / {record.clockInAt ? 'In' : 'No clock in'}
              </Text>
            </View>
            <Text style={styles.status}>{record.status.replace('_', ' ')}</Text>
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
    gap: spacing.md,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 0,
  },
  subtitle: {
    color: colors.textSecondary,
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
    textTransform: 'uppercase',
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
  rowMain: {
    flex: 1,
  },
  name: {
    color: colors.textPrimary,
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
