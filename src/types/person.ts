import { BaseEntityType, BaseIdType } from './base-entity-type';

export type BasePerson = {
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

export type PersonForeignEntities = {
  company?: any;
  role?: any;
  department?: any;
  contactType?: any;
};

export type GetPeopleResponse = BaseEntityType &
  BasePerson & {
    __company__?: any;
    __role__?: any;
    __department__?: any;
    __contactType__?: any;
  };

export type CreatePersonRequest = BasePerson;

export type EditPersonRequest = BaseIdType & Partial<BasePerson>;

export type Person = BaseEntityType & BasePerson & PersonForeignEntities;
