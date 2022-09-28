import { useEffect, useMemo, useState } from 'react';
import { ContactTypeMapper } from '../mappers/contact-type';
import { ContactTypeService } from '../services/contact-type-service';
import { ContactType } from '../types/contact-type';

export const useContactType = () => {
  const [contactTypes, setContactTypes] = useState<ContactType[]>([]);

  const contactTypeService: ContactTypeService = useMemo(
    () => new ContactTypeService(),
    [],
  );

  const fetchContactTypes = async () => {
    const newContactTypes: ContactType[] =
      ContactTypeMapper.mapTransformToEntityType(
        await contactTypeService.getAll(),
      );
    setContactTypes(newContactTypes);
  };

  useEffect(() => {
    fetchContactTypes();
  }, []);

  return {
    contactTypes,
    fetchContactTypes,
  };
};
