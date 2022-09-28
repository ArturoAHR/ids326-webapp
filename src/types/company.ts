import { BaseEntityType } from './base-entity-type';
import { Person } from './person';

export type BaseCompany = {
  name: string;
  ceoId: string;
  primaryPhone: string;
  secondaryPhone: string;
  fax: string;
  email: string;
  website: string;
};

export type CompanyForeignEntities = {
  ceo?: Person;
};

export type GetCompanyResponse = BaseEntityType &
  BaseCompany & {
    __ceo__?: Person;
  };

export type Company = BaseEntityType & BaseCompany & CompanyForeignEntities;
