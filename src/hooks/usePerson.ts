import { useEffect, useState } from 'react';
import { PersonMapper } from '../mappers/person';
import { PersonService } from '../services/person-service';
import { Person } from '../types/person';

export const usePerson = () => {
  const [people, setPeople] = useState<Person[]>([]);

  const fetchPeople = async () => {
    const personService: PersonService = new PersonService();
    const newPeople: Person[] = PersonMapper.mapTransformToEntityType(
      await personService.getAll(),
    );
    setPeople(newPeople);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return { people, fetchPeople };
};
