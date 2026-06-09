import { StaffStatus } from '@/types';

import { StaffDTO } from './dtos';

export interface StaffMutationDTO {
  staffId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  employmentDate: string;
  status: StaffStatus;
}

export interface StaffApiContract {
  list(): Promise<StaffDTO[]>;
  findById(staffId: string): Promise<StaffDTO | undefined>;
  create(input: StaffMutationDTO): Promise<StaffDTO>;
  update(id: string, input: StaffMutationDTO): Promise<StaffDTO>;
  setStatus(id: string, status: StaffStatus): Promise<StaffDTO>;
}
