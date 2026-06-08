import { mockOrganizationService } from '@/services/mockOrganizationService';

export const organizationApi = {
  list: mockOrganizationService.list,
  findCurrent: mockOrganizationService.findCurrent,
};
