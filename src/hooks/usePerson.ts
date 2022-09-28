import { useEffect, useMemo, useState } from 'react';
import { PersonMapper } from '../mappers/person';
import { PersonService } from '../services/person-service';
import { DeletePersonRequest, Person } from '../types/person';

export const usePerson = () => {
  const [people, setPeople] = useState<Person[]>([]);

  const personService: PersonService = useMemo(() => new PersonService(), []);

  const fetchPeople = async () => {
    const newPeople: Person[] = PersonMapper.mapTransformToEntityType(
      await personService.getAll(),
    );
    setPeople(newPeople);
  };

  const deletePerson = async (dto: DeletePersonRequest) => {
    const deleted: boolean = await personService.delete(dto);
    await fetchPeople();
    return deleted;
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return { people, fetchPeople, deletePerson };
};
