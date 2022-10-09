import { BaseEntityType, BaseIdType } from './base-entity-type';

export type BaseDepartment = {
  code: string;
  name: string;
  description: string;
};

export type GetDepartmentsResponse = BaseEntityType & BaseDepartment;

export type Department = BaseEntityType & BaseDepartment;

export type CreateDepartmentRequest = BaseDepartment;

export type EditDepartmentRequest = BaseIdType & Partial<BaseDepartment>;

export type DeleteDepartmentRequest = BaseIdType;

export type CreateDepartmentForm = BaseDepartment;
