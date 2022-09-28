import { BaseEntityType } from './base-entity-type';

export type BaseDepartment = {
  code: string;
  name: string;
  description: string;
};

export type GetDepartmentsResponse = BaseEntityType & BaseDepartment;

export type Department = BaseEntityType & BaseDepartment;
