import { mockAttendance } from '@/mocks/mockAttendance';
import { mockStaff } from '@/mocks/mockStaff';
import { Attendance } from '@/types';
import { AppError } from '@/utils/AppError';

export const calculateHoursWorked = (clockInAt: string | null, clockOutAt: string | null): number => {
  if (!clockInAt || !clockOutAt) {
    return 0;
  }

  const milliseconds = new Date(clockOutAt).getTime() - new Date(clockInAt).getTime();

  return Math.max(0, Math.round((milliseconds / 1000 / 60 / 60) * 100) / 100);
};

export const mockAttendanceService = {
  async list(): Promise<Attendance[]> {
    return mockAttendance;
  },
  async findById(id: string): Promise<Attendance | undefined> {
    return mockAttendance.find((item) => item.id === id);
  },
  async clockIn(staffId: string, existingRecords: Attendance[] = mockAttendance): Promise<Attendance> {
    const staff = mockStaff.find((item) => item.id === staffId || item.staffId === staffId);

    if (!staff) {
      throw new AppError('Staff member not found.', 'STAFF_NOT_FOUND');
    }

    const now = new Date();
    const today = now.toISOString().slice(0, 10);
    const openRecord = existingRecords.find(
      (item) => item.staffId === staff.id && item.date === today && item.clockInAt && !item.clockOutAt,
    );

    if (openRecord) {
      throw new AppError('This staff member is already clocked in.', 'DOUBLE_CLOCK_IN');
    }

    return {
      id: `att-${now.getTime()}`,
      tenantId: staff.tenantId,
      organizationId: staff.organizationId,
      staffId: staff.id,
      staffName: staff.fullName,
      date: today,
      clockInAt: now.toISOString(),
      clockOutAt: null,
      hoursWorked: 0,
      status: 'PRESENT',
    };
  },
  async clockOut(attendanceId: string, existingRecords: Attendance[] = mockAttendance): Promise<Attendance> {
    const record = existingRecords.find((item) => item.id === attendanceId);

    if (!record) {
      throw new AppError('Attendance record not found.', 'ATTENDANCE_NOT_FOUND');
    }

    if (!record.clockInAt) {
      throw new AppError('Cannot clock out without a clock in.', 'MISSING_CLOCK_IN');
    }

    if (record.clockOutAt) {
      throw new AppError('This attendance record is already clocked out.', 'DOUBLE_CLOCK_OUT');
    }

    const clockOutAt = new Date().toISOString();

    return {
      ...record,
      clockOutAt,
      hoursWorked: calculateHoursWorked(record.clockInAt, clockOutAt),
      status: 'PRESENT',
    };
  },
};
