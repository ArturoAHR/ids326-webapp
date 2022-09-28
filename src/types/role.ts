import { BaseEntityType } from './base-entity-type';

export type BaseRole = {
  name: string;
  description: string;
};

export type GetRolesResponse = BaseEntityType & BaseRole;

export type Role = BaseEntityType & BaseRole;
