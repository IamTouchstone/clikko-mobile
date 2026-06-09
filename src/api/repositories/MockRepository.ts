import { attendanceApi } from '@/api/attendanceApi';
import { authApi } from '@/api/authApi';
import { organizationApi } from '@/api/organizationApi';
import { staffApi } from '@/api/staffApi';

import { AttendanceRepository } from './AttendanceRepository';
import { AuthRepository } from './AuthRepository';
import { OrganizationRepository } from './OrganizationRepository';
import { StaffRepository } from './StaffRepository';

export const mockRepositories = {
  auth: new AuthRepository(authApi),
  organization: new OrganizationRepository(organizationApi),
  staff: new StaffRepository(staffApi),
  attendance: new AttendanceRepository(attendanceApi),
};
