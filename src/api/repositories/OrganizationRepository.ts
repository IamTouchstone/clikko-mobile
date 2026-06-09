import {
  OrganizationApiContract,
  OrganizationRegistrationDTO,
} from '@/api/contracts/OrganizationApiContract';
import { OrganizationDTO } from '@/api/contracts/dtos';

export class OrganizationRepository implements OrganizationApiContract {
  constructor(private readonly api: OrganizationApiContract) {}

  list(): Promise<OrganizationDTO[]> {
    return this.api.list();
  }

  findCurrent(): Promise<OrganizationDTO> {
    return this.api.findCurrent();
  }

  register(input: OrganizationRegistrationDTO): Promise<OrganizationDTO> {
    return this.api.register(input);
  }
}
