import { mockStaff } from '@/mocks/mockStaff';
import { Staff, StaffStatus } from '@/types';

export type StaffDraft = Pick<
  Staff,
  | 'staffId'
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phone'
  | 'department'
  | 'position'
  | 'employmentDate'
  | 'status'
>;

const hydrateStaff = (input: StaffDraft, id = `staff-${Date.now()}`): Staff => ({
  ...input,
  id,
  tenantId: 'tenant-clikko-demo',
  organizationId: 'org-northstar-logistics',
  employeeCode: input.staffId,
  fullName: `${input.firstName} ${input.lastName}`,
  jobTitle: input.position,
  joinedAt: input.employmentDate,
});

export const mockStaffService = {
  async list(): Promise<Staff[]> {
    return mockStaff;
  },
  async findById(staffId: string): Promise<Staff | undefined> {
    return mockStaff.find((staff) => staff.id === staffId || staff.staffId === staffId);
  },
  async create(input: StaffDraft): Promise<Staff> {
    return hydrateStaff(input);
  },
  async update(id: string, input: StaffDraft): Promise<Staff> {
    return hydrateStaff(input, id);
  },
  async setStatus(id: string, status: StaffStatus): Promise<Staff> {
    const staff = mockStaff.find((item) => item.id === id);

    if (!staff) {
      throw new Error('Staff member not found.');
    }

    return { ...staff, status };
  },
};
