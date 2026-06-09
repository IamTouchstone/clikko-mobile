import { create } from 'zustand';

import { mockAttendance } from '@/mocks/mockAttendance';
import { mockAttendanceService } from '@/services/mockAttendanceService';
import { Attendance } from '@/types';

interface AttendanceState {
  attendance: Attendance[];
  error: string | null;
  clockIn: (staffId: string) => Promise<void>;
  clockOut: (attendanceId: string) => Promise<void>;
  clearError: () => void;
}

export const useAttendanceStore = create<AttendanceState>((set) => ({
  attendance: mockAttendance,
  error: null,
  clockIn: async (staffId) => {
    try {
      const record = await mockAttendanceService.clockIn(staffId, useAttendanceStore.getState().attendance);
      set((state) => ({ attendance: [record, ...state.attendance], error: null }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Unable to clock in.' });
    }
  },
  clockOut: async (attendanceId) => {
    try {
      const record = await mockAttendanceService.clockOut(
        attendanceId,
        useAttendanceStore.getState().attendance,
      );
      set((state) => ({
        attendance: state.attendance.map((item) => (item.id === attendanceId ? record : item)),
        error: null,
      }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Unable to clock out.' });
    }
  },
  clearError: () => set({ error: null }),
}));
