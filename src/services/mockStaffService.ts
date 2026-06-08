import { mockStaff } from '@/mocks/mockStaff';
import { Staff } from '@/types';

export type StaffDraft = Omit<Staff, 'id' | 'tenantId' | 'organizationId'>;

export const mockStaffService = {
  async list(): Promise<Staff[]> {
    return mockStaff;
  },
  async findById(staffId: string): Promise<Staff | undefined> {
    return mockStaff.find((staff) => staff.id === staffId);
  },
  async create(input: StaffDraft): Promise<Staff> {
    return {
      ...input,
      id: `staff-${Date.now()}`,
      tenantId: 'tenant-clikko-demo',
      organizationId: 'org-northstar-logistics',
    };
  },
};
