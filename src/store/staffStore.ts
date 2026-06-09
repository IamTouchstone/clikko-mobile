import { create } from 'zustand';

import { mockStaff } from '@/mocks/mockStaff';
import { mockStaffService, StaffDraft } from '@/services/mockStaffService';
import { Staff, StaffStatus } from '@/types';

interface StaffState {
  staff: Staff[];
  query: string;
  statusFilter: StaffStatus | 'ALL';
  setQuery: (query: string) => void;
  setStatusFilter: (status: StaffStatus | 'ALL') => void;
  addStaff: (staff: StaffDraft) => Promise<Staff>;
  updateStaff: (id: string, staff: StaffDraft) => Promise<Staff>;
  setStaffStatus: (id: string, status: StaffStatus) => Promise<void>;
  findStaffById: (id: string) => Staff | undefined;
}

export const useStaffStore = create<StaffState>((set) => ({
  staff: mockStaff,
  query: '',
  statusFilter: 'ALL',
  setQuery: (query) => set({ query }),
  setStatusFilter: (statusFilter) => set({ statusFilter }),
  addStaff: async (input) => {
    const staff = await mockStaffService.create(input);
    set((state) => ({ staff: [staff, ...state.staff] }));

    return staff;
  },
  updateStaff: async (id, input) => {
    const staff = await mockStaffService.update(id, input);
    set((state) => ({ staff: state.staff.map((item) => (item.id === id ? staff : item)) }));

    return staff;
  },
  setStaffStatus: async (id, status) => {
    set((state) => ({
      staff: state.staff.map((item) => (item.id === id ? { ...item, status } : item)),
    }));
  },
  findStaffById: (id) => mockStaff.find((staff) => staff.id === id || staff.staffId === id),
}));
