import { FC, ReactNode, useState } from 'react';
import { Tabs } from 'antd';
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

  const handleChange = (value: string) => {
    setOptionSelected(value as CRUDTabMenuOptions);
    navigate('/hw-1/crud/' + value);
  };

  return (
    <div className="crud-menu-container">
      <h1 className="crud-menu-title">CRUD</h1>
      <Tabs
        defaultActiveKey={optionSelected}
        onChange={handleChange}
        items={[
          { label: 'Person', key: CRUDTabMenuOptions.Person },
          { label: 'Role', key: CRUDTabMenuOptions.Role },
          { label: 'Contact Type', key: CRUDTabMenuOptions.ContactType },
        ]}
      />
      {children}
    </div>
  );
};
