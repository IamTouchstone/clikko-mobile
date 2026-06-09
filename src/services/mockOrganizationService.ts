import { mockOrganizations } from '@/mocks/mockOrganizations';
import { Organization } from '@/types';

export interface OrganizationRegistrationInput {
  name: string;
  email: string;
  contactPerson: string;
  phone: string;
  country: string;
  numberOfEmployees: number;
}

export const mockOrganizationService = {
  async list(): Promise<Organization[]> {
    return mockOrganizations;
  },
  async findCurrent(): Promise<Organization> {
    return mockOrganizations[0];
  },
  async register(input: OrganizationRegistrationInput): Promise<Organization> {
    const slug = input.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    return {
      id: `tenant-${slug}`,
      tenantId: `tenant-${slug}`,
      organizationId: `org-${slug}`,
      name: input.name,
      email: input.email,
      contactPerson: input.contactPerson,
      phone: input.phone,
      country: input.country,
      numberOfEmployees: input.numberOfEmployees,
      plan: 'STARTER',
      isActive: false,
      verificationStatus: 'PENDING',
      createdAt: new Date().toISOString(),
    };
  },
};
