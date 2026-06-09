import { OrganizationDTO } from './dtos';

export interface OrganizationRegistrationDTO {
  name: string;
  email: string;
  contactPerson: string;
  phone: string;
  country: string;
  numberOfEmployees: number;
}

export interface OrganizationApiContract {
  list(): Promise<OrganizationDTO[]>;
  findCurrent(): Promise<OrganizationDTO>;
  register(input: OrganizationRegistrationDTO): Promise<OrganizationDTO>;
}
