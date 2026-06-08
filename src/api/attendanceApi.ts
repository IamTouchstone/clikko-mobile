import { mockAttendanceService } from '@/services/mockAttendanceService';

export const attendanceApi = {
  list: mockAttendanceService.list,
  clockIn: mockAttendanceService.clockIn,
  clockOut: mockAttendanceService.clockOut,
};
