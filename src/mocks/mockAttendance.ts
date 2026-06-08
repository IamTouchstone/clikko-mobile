import { Attendance, AttendanceStatus } from '@/types';

const tenantId = 'tenant-clikko-demo';
const organizationId = 'org-northstar-logistics';
const dates = ['2026-06-08', '2026-06-07', '2026-06-06', '2026-06-05'];

const staff = [
  ['staff-001', 'Amina Yusuf'],
  ['staff-002', 'Chinedu Eze'],
  ['staff-003', 'Mariam Bello'],
  ['staff-004', 'Tunde Adebayo'],
  ['staff-005', 'Grace Nwosu'],
  ['staff-006', 'Seyi Balogun'],
  ['staff-007', 'Fatima Lawal'],
  ['staff-008', 'Emeka Obi'],
  ['staff-009', 'Lola Martins'],
  ['staff-010', 'Ibrahim Musa'],
] as const;

const getStatus = (dateIndex: number, staffIndex: number): AttendanceStatus => {
  if (dateIndex === 0 && staffIndex === 4) return 'ABSENT';
  if (dateIndex === 0 && staffIndex === 7) return 'ABSENT';
  if (staffIndex % 5 === 2) return 'LATE';
  if (dateIndex === 0 && staffIndex % 2 === 0) return 'CLOCKED_IN';
  return 'PRESENT';
};

export const mockAttendance: Attendance[] = dates.flatMap((date, dateIndex) =>
  staff.map(([staffId, staffName], staffIndex) => {
    const status = getStatus(dateIndex, staffIndex);
    const hasClockIn = status !== 'ABSENT';
    const clockInMinute = staffIndex % 3 === 0 ? '55' : staffIndex % 3 === 1 ? '02' : '31';

    return {
      id: `att-${date.replaceAll('-', '')}-${staffId}`,
      tenantId,
      organizationId,
      staffId,
      staffName,
      date,
      clockInAt: hasClockIn ? `${date}T08:${clockInMinute}:00.000Z` : null,
      clockOutAt:
        hasClockIn && status !== 'CLOCKED_IN'
          ? `${date}T16:${String(5 + staffIndex).padStart(2, '0')}:00.000Z`
          : null,
      status,
      notes: status === 'ABSENT' ? 'Marked absent in mock attendance register.' : undefined,
    };
  }),
);
