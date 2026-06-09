export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  STAFF = 'STAFF',
}

export type StaffStatus = 'ACTIVE' | 'SUSPENDED' | 'ARCHIVED';

export type AttendanceStatus = 'PRESENT' | 'ABSENT' | 'LATE';

export type DeviceStatus = 'ACTIVE' | 'INACTIVE' | 'RETIRED';

export interface Organization {
  id: string;
  tenantId: string;
  organizationId: string;
  name: string;
  email: string;
  contactPerson: string;
  phone: string;
  country: string;
  numberOfEmployees: number;
  plan: 'STARTER' | 'GROWTH' | 'ENTERPRISE';
  isActive: boolean;
  verificationStatus: 'PENDING' | 'VERIFIED';
  createdAt: string;
}

export interface User {
  id: string;
  tenantId: string;
  organizationId: string;
  email: string;
  fullName: string;
  role: UserRole;
  isActivated: boolean;
  createdAt: string;
}

export interface Staff {
  id: string;
  tenantId: string;
  organizationId: string;
  employeeCode: string;
  staffId: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  department: string;
  position: string;
  jobTitle: string;
  status: StaffStatus;
  phone: string;
  employmentDate: string;
  joinedAt: string;
}

export interface Attendance {
  id: string;
  tenantId: string;
  organizationId: string;
  staffId: string;
  staffName: string;
  date: string;
  clockInAt: string | null;
  clockOutAt: string | null;
  hoursWorked: number;
  status: AttendanceStatus;
  notes?: string;
}

export interface AuthSession {
  token: string;
  user: User;
  tenantId: string;
  organizationId: string;
  expiresAt: string;
}

export interface Device {
  id: string;
  tenantId: string;
  organizationId: string;
  deviceId: string;
  deviceName: string;
  deviceType: 'MOBILE' | 'TABLET' | 'KIOSK' | 'USB_SCANNER';
  registrationDate: string;
  status: DeviceStatus;
}
