import { BaseEntityType } from './base-entity-type';

export type Person = BaseEntityType & {
  firstName: string;
  middleName: string;
  lastName: string;
  staff: boolean;
  phone: string;
  email: string;
  roleId: string;
  contactTypeId: string;
  departmentId: string;
  companyId: string;
};
