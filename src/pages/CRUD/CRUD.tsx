import { FC, ReactNode, SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './CRUD.css';

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

  const [optionSelected, setOptionSelected] = useState<CRUDTabMenuOptions>(
    CRUDTabMenuOptions.Person,
  );

  const handleChange = (event: SyntheticEvent, value: CRUDTabMenuOptions) => {
    setOptionSelected(value);
    event.preventDefault();
    navigate('/hw-1/crud/' + value);
  };

  return (
    <div className="crud-menu-container">
      <h1 className="crud-menu-title">CRUD</h1>
      {/* <
        value={optionSelected}
        onChange={handleChange}
        className="crud-menu"
      >
        <Tab label="Person" value={CRUDTabMenuOptions.Person} />
        <Tab label="Role" value={CRUDTabMenuOptions.Role} />
        <Tab label="Contact Type" value={CRUDTabMenuOptions.ContactType} />
      </Tabs> */}
      {children}
    </div>
  );
};
