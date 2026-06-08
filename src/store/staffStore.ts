import { create } from 'zustand';

import { mockStaff } from '@/mocks/mockStaff';
import { Staff, StaffStatus } from '@/types';

interface StaffState {
  staff: Staff[];
  query: string;
  statusFilter: StaffStatus | 'ALL';
  setQuery: (query: string) => void;
  setStatusFilter: (status: StaffStatus | 'ALL') => void;
  addStaff: (staff: Staff) => void;
}

export const useStaffStore = create<StaffState>((set) => ({
  staff: mockStaff,
  query: '',
  statusFilter: 'ALL',
  setQuery: (query) => set({ query }),
  setStatusFilter: (statusFilter) => set({ statusFilter }),
  addStaff: (staff) => set((state) => ({ staff: [staff, ...state.staff] })),
}));
