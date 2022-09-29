import { BaseEntityType, BaseIdType } from './base-entity-type';

export type BaseContactType = {
  name: string;
  description: string;
};

export type GetContactTypesResponse = BaseEntityType & BaseContactType;

export type ContactType = BaseEntityType & BaseContactType;

export type CreateContactTypeRequest = BaseContactType;

export type EditContactTypeRequest = BaseIdType & Partial<BaseContactType>;

export type DeleteContactTypeRequest = BaseIdType;

export type CreateContactTypeForm = BaseContactType;
