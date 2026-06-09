import { AttendanceStatus, DeviceStatus, StaffStatus, UserRole } from '@/types';

export interface OrganizationDTO {
  id: string;
  tenantId: string;
  organizationId: string;
  name: string;
  email: string;
  contactPerson: string;
  phone: string;
  country: string;
  numberOfEmployees: number;
  verificationStatus: 'PENDING' | 'VERIFIED';
}

export interface StaffDTO {
  id: string;
  tenantId: string;
  organizationId: string;
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

export interface AttendanceDTO {
  id: string;
  tenantId: string;
  organizationId: string;
  staffId: string;
  date: string;
  clockInAt: string | null;
  clockOutAt: string | null;
  hoursWorked: number;
  status: AttendanceStatus;
}

export interface AuthDTO {
  token: string;
  tenantId: string;
  organizationId: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    role: UserRole;
  };
}

export interface DeviceDTO {
  id: string;
  tenantId: string;
  organizationId: string;
  deviceId: string;
  deviceName: string;
  deviceType: string;
  registrationDate: string;
  status: DeviceStatus;
}
