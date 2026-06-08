import { mockOrganizations } from '@/mocks/mockOrganizations';
import { Organization } from '@/types';

export const mockOrganizationService = {
  async list(): Promise<Organization[]> {
    return mockOrganizations;
  },
  async findCurrent(): Promise<Organization> {
    return mockOrganizations[0];
  },
};
