import { ContactType, GetContactTypesResponse } from '../types/contact-type';

export class ContactTypeMapper {
  static transformToEntityType = (
    dto: GetContactTypesResponse,
  ): ContactType => {
    const contactType = {
      ...dto,
    };
    return contactType;
  };

  static mapTransformToEntityType = (
    dto: GetContactTypesResponse[],
  ): ContactType[] => {
    const contactTypes = dto.map((contactTypeDto) =>
      this.transformToEntityType(contactTypeDto),
    );
    return contactTypes;
  };
}
