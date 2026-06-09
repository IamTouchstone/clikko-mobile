import { StaffApiContract, StaffMutationDTO } from '@/api/contracts/StaffApiContract';
import { StaffDTO } from '@/api/contracts/dtos';
import { StaffStatus } from '@/types';

export class StaffRepository implements StaffApiContract {
  constructor(private readonly api: StaffApiContract) {}

  list(): Promise<StaffDTO[]> {
    return this.api.list();
  }

  findById(staffId: string): Promise<StaffDTO | undefined> {
    return this.api.findById(staffId);
  }

  create(input: StaffMutationDTO): Promise<StaffDTO> {
    return this.api.create(input);
  }

  update(id: string, input: StaffMutationDTO): Promise<StaffDTO> {
    return this.api.update(id, input);
  }

  setStatus(id: string, status: StaffStatus): Promise<StaffDTO> {
    return this.api.setStatus(id, status);
  }
}
