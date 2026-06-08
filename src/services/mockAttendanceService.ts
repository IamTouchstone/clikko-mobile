import { mockAttendance } from '@/mocks/mockAttendance';
import { mockStaff } from '@/mocks/mockStaff';
import { Attendance } from '@/types';
import { AppError } from '@/utils/AppError';

export const mockAttendanceService = {
  async list(): Promise<Attendance[]> {
    return mockAttendance;
  },
  async clockIn(staffId: string): Promise<Attendance> {
    const staff = mockStaff.find((item) => item.id === staffId);

    if (!staff) {
      throw new AppError('Staff member not found.', 'STAFF_NOT_FOUND');
    }

    const now = new Date();

    return {
      id: `att-${now.getTime()}`,
      tenantId: staff.tenantId,
      organizationId: staff.organizationId,
      staffId: staff.id,
      staffName: staff.fullName,
      date: now.toISOString().slice(0, 10),
      clockInAt: now.toISOString(),
      clockOutAt: null,
      status: 'CLOCKED_IN',
    };
  },
  async clockOut(attendanceId: string): Promise<Attendance> {
    const record = mockAttendance.find((item) => item.id === attendanceId);

    if (!record) {
      throw new AppError('Attendance record not found.', 'ATTENDANCE_NOT_FOUND');
    }

    return {
      ...record,
      clockOutAt: new Date().toISOString(),
      status: 'PRESENT',
    };
  },
};
