import { BaseEntityType, BaseIdType } from './base-entity-type';

export type BaseRole = {
  name: string;
  description: string;
};

export type GetRolesResponse = BaseEntityType & BaseRole;

export type Role = BaseEntityType & BaseRole;

export type CreateRoleRequest = BaseRole;

export type EditRoleRequest = BaseIdType & Partial<BaseRole>;

export type DeleteRoleRequest = BaseIdType;

export type CreateRoleForm = BaseRole;
