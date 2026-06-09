import { create } from 'zustand';

import { mockOrganizations } from '@/mocks/mockOrganizations';
import {
  mockOrganizationService,
  OrganizationRegistrationInput,
} from '@/services/mockOrganizationService';
import { Organization } from '@/types';

interface OrganizationState {
  organizations: Organization[];
  currentOrganization: Organization;
  lastRegisteredOrganization: Organization | null;
  registerOrganization: (input: OrganizationRegistrationInput) => Promise<Organization>;
}

export const useOrganizationStore = create<OrganizationState>((set) => ({
  organizations: mockOrganizations,
  currentOrganization: mockOrganizations[0],
  lastRegisteredOrganization: null,
  registerOrganization: async (input) => {
    const organization = await mockOrganizationService.register(input);
    set((state) => ({
      organizations: [organization, ...state.organizations],
      lastRegisteredOrganization: organization,
    }));

    return organization;
  },
}));
