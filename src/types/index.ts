// ======================================================
// CLIKKO CORE TYPES
// ======================================================

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  STAFF = 'STAFF',
}

// ======================================================
// STAFF
// ======================================================

export type StaffStatus =
  | 'ACTIVE'
  | 'SUSPENDED'
  | 'ARCHIVED';

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
  phone: string;

  department: string;
  position: string;
  jobTitle: string;

  employmentDate: string;
  joinedAt: string;

  status: StaffStatus;
}

// ======================================================
// ORGANIZATION
// ======================================================

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

  verificationStatus: 'PENDING' | 'VERIFIED';

  isActive: boolean;

  createdAt: string;
}

// ======================================================
// USER
// ======================================================

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

// ======================================================
// AUTH
// ======================================================

export interface AuthSession {
  token: string;

  tenantId: string;
  organizationId: string;

  user: User;

  expiresAt: string;
}

// ======================================================
// ATTENDANCE
// ======================================================

export type AttendanceStatus =
  | 'PRESENT'
  | 'ABSENT'
  | 'LATE'
  | 'CLOCKED_IN'
  | 'CLOCKED_OUT';

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

// ======================================================
// DEVICES
// ======================================================

export type DeviceStatus =
  | 'ACTIVE'
  | 'INACTIVE'
  | 'RETIRED';

export type DeviceType =
  | 'MOBILE'
  | 'TABLET'
  | 'KIOSK'
  | 'USB_SCANNER';

export interface Device {
  id: string;

  tenantId: string;
  organizationId: string;

  deviceId: string;
  deviceName: string;

  deviceType: DeviceType;

  registrationDate: string;

  status: DeviceStatus;
}

// ======================================================
// FINGERPRINT (SPRINT 6 FOUNDATION)
// ======================================================

export interface FingerprintTemplate {
  id: string;

  tenantId: string;
  organizationId: string;

  staffId: string;

  enrolledAt: string;

  deviceId: string;

  templateReference: string;
}

// ======================================================
// API RESPONSE TYPES
// ======================================================

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface PaginatedResponse<T> {
  items: T[];

  total: number;
  page: number;
  pageSize: number;

  hasNextPage: boolean;
  hasPreviousPage: boolean;
}