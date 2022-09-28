export type BaseIdType = {
  id: string;
};

export type BaseCrudType = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};

export type BaseEntityType = BaseIdType & BaseCrudType;
