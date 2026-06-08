import { User, UserRole } from '@/types';

export const mockUsers: User[] = [
  {
    id: 'user-super-admin-001',
    tenantId: 'tenant-clikko-demo',
    organizationId: 'org-northstar-logistics',
    email: 'admin@demo.com',
    fullName: 'Ada Okafor',
    role: UserRole.SUPER_ADMIN,
    isActivated: true,
    createdAt: '2026-01-12T08:05:00.000Z',
  },
  {
    id: 'user-staff-001',
    tenantId: 'tenant-clikko-demo',
    organizationId: 'org-northstar-logistics',
    email: 'amina.yusuf@example.com',
    fullName: 'Amina Yusuf',
    role: UserRole.STAFF,
    isActivated: true,
    createdAt: '2026-02-03T09:00:00.000Z',
  },
];
