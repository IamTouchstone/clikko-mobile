import { create } from 'zustand';

import { mockOrganizations } from '@/mocks/mockOrganizations';
import { Organization } from '@/types';

interface OrganizationState {
  organizations: Organization[];
  currentOrganization: Organization;
}

export const useOrganizationStore = create<OrganizationState>(() => ({
  organizations: mockOrganizations,
  currentOrganization: mockOrganizations[0],
}));
