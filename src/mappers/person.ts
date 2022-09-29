import { GetPeopleResponse, Person } from '../types/person';
import { CompanyMapper } from './company';
import { ContactTypeMapper } from './contact-type';
import { DepartmentMapper } from './department';
import { RoleMapper } from './role';

export class PersonMapper {
  static transformToEntityType = (dto: GetPeopleResponse): Person => {
    const person = {
      ...dto,
      company:
        dto.__company__ && CompanyMapper.transformToEntityType(dto.__company__),
      role: dto.__role__ && RoleMapper.transformToEntityType(dto.__role__),
      department:
        dto.__department__ &&
        DepartmentMapper.transformToEntityType(dto.__department__),
      contactType:
        dto.__contactType__ &&
        ContactTypeMapper.transformToEntityType(dto.__contactType__),
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
