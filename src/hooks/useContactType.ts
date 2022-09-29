import { useEffect, useMemo, useState } from 'react';
import { ContactTypeMapper } from '../mappers/contact-type';
import { ContactTypeService } from '../services/contact-type-service';
import {
  ContactType,
  CreateContactTypeRequest,
  DeleteContactTypeRequest,
  EditContactTypeRequest,
} from '../types/contact-type';
import { SelectOption } from '../types/misc';

export const useContactType = () => {
  const [contactTypes, setContactTypes] = useState<ContactType[]>([]);

  const contactTypeService: ContactTypeService = useMemo(
    () => new ContactTypeService(),
    [],
  );

  const contactTypeOptions: SelectOption[] = useMemo(
    () =>
      contactTypes.map((contactType) => ({
        value: contactType.id,
        label: contactType.name,
      })),
    [contactTypes],
  );

  const fetchContactTypes = async () => {
    const newContactTypes: ContactType[] =
      ContactTypeMapper.mapTransformToEntityType(
        await contactTypeService.getAll(),
      );
    setContactTypes(newContactTypes);
  };

  const deleteContactType = async (dto: DeleteContactTypeRequest) => {
    const deleted: boolean = await contactTypeService.delete(dto);
    await fetchContactTypes();
    return deleted;
  };

  const createContactType = async (dto: CreateContactTypeRequest) => {
    const created: boolean = await contactTypeService.create(dto);
    await fetchContactTypes();
    return created;
  };

  const editContactType = async (dto: EditContactTypeRequest) => {
    const edited: boolean = await contactTypeService.edit(dto);
    await fetchContactTypes();
    return edited;
  };

  useEffect(() => {
    fetchContactTypes();
  }, []);

  return {
    contactTypes,
    contactTypeOptions,
    fetchContactTypes,
    createContactType,
    editContactType,
    deleteContactType,
  };
};
