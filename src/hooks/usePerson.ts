import { useEffect, useState } from 'react';
import { PersonService } from '../services/person-service';
import { GetPeopleResponse, Person } from '../types/person';

export const usePerson = () => {
  const [people, setPeople] = useState<Person[]>([]);

  const transformToEntityType = (dto: GetPeopleResponse): Person => {
    const newPerson = {
      ...dto,
      company: dto.__company__,
      role: dto.__role__,
      department: dto.__department__,
      contactType: dto.__contactType__,
    };
    return newPerson;
  };

  const mapTransformToEntityType = (dto: GetPeopleResponse[]): Person[] => {
    const newPeople = dto.map((personDto) => transformToEntityType(personDto));
    return newPeople;
  };

  const fetchPeople = async () => {
    const personService: PersonService = new PersonService();
    const newPeople: Person[] = mapTransformToEntityType(
      await personService.getAll(),
    );
    setPeople(newPeople);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return { people };
};
