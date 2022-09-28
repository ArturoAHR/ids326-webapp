import { GetPeopleResponse, Person } from '../types/person';

export class PersonMapper {
  static transformToEntityType = (dto: GetPeopleResponse): Person => {
    const person = {
      ...dto,
      company: dto.__company__,
      role: dto.__role__,
      department: dto.__department__,
      contactType: dto.__contactType__,
    };
    return person;
  };

  static mapTransformToEntityType = (dto: GetPeopleResponse[]): Person[] => {
    const people = dto.map((personDto) =>
      this.transformToEntityType(personDto),
    );
    return people;
  };
}
