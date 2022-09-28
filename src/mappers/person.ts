import { GetPeopleResponse, Person } from '../types/person';

export class PersonMapper {
  static transformToEntityType = (dto: GetPeopleResponse): Person => {
    const newPerson = {
      ...dto,
      company: dto.__company__,
      role: dto.__role__,
      department: dto.__department__,
      contactType: dto.__contactType__,
    };
    return newPerson;
  };

  static mapTransformToEntityType = (dto: GetPeopleResponse[]): Person[] => {
    const newPeople = dto.map((personDto) =>
      this.transformToEntityType(personDto),
    );
    return newPeople;
  };
}
