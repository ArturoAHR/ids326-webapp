import { BaseEntityType, BaseIdType } from './base-entity-type';
import { Company, GetCompanyResponse } from './company';
import { ContactType, GetContactTypesResponse } from './contact-type';
import { Department, GetDepartmentsResponse } from './department';
import { GetRolesResponse, Role } from './role';

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
  company?: Company;
  role?: Role;
  department?: Department;
  contactType?: ContactType;
};

export type GetPeopleResponse = BaseEntityType &
  BasePerson & {
    __company__?: GetCompanyResponse;
    __role__?: GetRolesResponse;
    __department__?: GetDepartmentsResponse;
    __contactType__?: GetContactTypesResponse;
  };

export type CreatePersonRequest = BasePerson;

export type EditPersonRequest = BaseIdType & Partial<BasePerson>;

export type DeletePersonRequest = BaseIdType;

export type Person = BaseEntityType & BasePerson & PersonForeignEntities;

export type CreatePersonForm = BasePerson;
