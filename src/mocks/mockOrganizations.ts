import { Organization } from '@/types';

export const mockOrganizations: Organization[] = [
  {
    id: 'tenant-clikko-demo',
    tenantId: 'tenant-clikko-demo',
    organizationId: 'org-northstar-logistics',
    name: 'Northstar Logistics Ltd',
    email: 'ops@northstar.example',
    contactPerson: 'Ada Okafor',
    phone: '+234 801 111 1000',
    country: 'Nigeria',
    numberOfEmployees: 42,
    plan: 'GROWTH',
    isActive: true,
    verificationStatus: 'VERIFIED',
    createdAt: '2026-01-12T08:00:00.000Z',
  },
];
