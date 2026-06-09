import { mockAttendanceService } from '@/services/mockAttendanceService';

export const attendanceApi = {
  list: mockAttendanceService.list,
  findById: mockAttendanceService.findById,
  clockIn: mockAttendanceService.clockIn,
  clockOut: mockAttendanceService.clockOut,
};
