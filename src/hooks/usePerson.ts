import { useEffect, useMemo, useState } from 'react';
import { PersonMapper } from '../mappers/person';
import { PersonService } from '../services/person-service';
import { SelectOption } from '../types/misc';
import {
  CreatePersonRequest,
  DeletePersonRequest,
  EditPersonRequest,
  Person,
} from '../types/person';

export const usePerson = () => {
  const [people, setPeople] = useState<Person[]>([]);

  const personService: PersonService = useMemo(() => new PersonService(), []);

  const personOptions: SelectOption[] = useMemo(
    () =>
      people.map((person) => ({
        value: person.id,
        label: `${person.firstName} ${person.lastName}`,
      })),
    [people],
  );

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

  const createPerson = async (dto: CreatePersonRequest) => {
    const created: boolean = await personService.create(dto);
    await fetchPeople();
    return created;
  };

  const editPerson = async (dto: EditPersonRequest) => {
    const edited: boolean = await personService.edit(dto);
    await fetchPeople();
    return edited;
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return {
    people,
    personOptions,
    fetchPeople,
    createPerson,
    editPerson,
    deletePerson,
  };
};
