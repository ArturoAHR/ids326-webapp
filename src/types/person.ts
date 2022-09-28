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
  company: any;
  role: any;
  department: any;
  contactType: any;
};

export type GetPeopleResponse = Person & {
  __company__: any;
  __role__: any;
  __department__: any;
  __contactType__: any;
};
