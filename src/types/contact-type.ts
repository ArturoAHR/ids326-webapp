import { BaseEntityType } from './base-entity-type';

export type BaseContactType = {
  name: string;
  description: string;
};

export type GetContactTypesResponse = BaseEntityType & BaseContactType;

export type ContactType = BaseEntityType & BaseContactType;
