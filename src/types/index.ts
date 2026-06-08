export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  STAFF = 'STAFF',
}

export type StaffStatus = 'ACTIVE' | 'INACTIVE' | 'ON_LEAVE';

export type AttendanceStatus = 'PRESENT' | 'ABSENT' | 'LATE' | 'CLOCKED_IN';

export interface Organization {
  id: string;
  tenantId: string;
  organizationId: string;
  name: string;
  email: string;
  plan: 'STARTER' | 'GROWTH' | 'ENTERPRISE';
  isActive: boolean;
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
  fullName: string;
  email: string;
  department: string;
  jobTitle: string;
  status: StaffStatus;
  phone: string;
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
