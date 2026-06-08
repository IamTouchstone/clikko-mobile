import { create } from 'zustand';

import { mockAttendance } from '@/mocks/mockAttendance';
import { mockAttendanceService } from '@/services/mockAttendanceService';
import { Attendance } from '@/types';

interface AttendanceState {
  attendance: Attendance[];
  clockIn: (staffId: string) => Promise<void>;
  clockOut: (attendanceId: string) => Promise<void>;
}

export const useAttendanceStore = create<AttendanceState>((set) => ({
  attendance: mockAttendance,
  clockIn: async (staffId) => {
    const record = await mockAttendanceService.clockIn(staffId);
    set((state) => ({ attendance: [record, ...state.attendance] }));
  },
  clockOut: async (attendanceId) => {
    const record = await mockAttendanceService.clockOut(attendanceId);
    set((state) => ({
      attendance: state.attendance.map((item) => (item.id === attendanceId ? record : item)),
    }));
  },
}));
