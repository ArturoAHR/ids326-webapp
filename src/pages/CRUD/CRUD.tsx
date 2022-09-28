import { Tab, Tabs } from '@mui/material';
import { FC, ReactNode, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

type CRUDProps = {
  children?: ReactNode;
};

enum CRUDTabMenuOptions {
  Person = 'person',
  Role = 'role',
  ContactType = 'contact-type',
}

export const CRUD: FC<CRUDProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleChange = (event: SyntheticEvent, value: CRUDTabMenuOptions) => {
    event.preventDefault();
    navigate('/hw-1/crud/' + value);
  };

  return (
    <div>
      <Tabs onChange={handleChange}>
        <Tab label="Person" value={CRUDTabMenuOptions.Person} />
        <Tab label="Role" value={CRUDTabMenuOptions.Role} />
        <Tab label="Contact Type" value={CRUDTabMenuOptions.ContactType} />
      </Tabs>
      {children}
    </div>
  );
};
