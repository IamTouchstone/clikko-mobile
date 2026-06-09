import { mockStaffService } from '@/services/mockStaffService';

export const staffApi = {
  list: mockStaffService.list,
  findById: mockStaffService.findById,
  create: mockStaffService.create,
  update: mockStaffService.update,
  setStatus: mockStaffService.setStatus,
};
