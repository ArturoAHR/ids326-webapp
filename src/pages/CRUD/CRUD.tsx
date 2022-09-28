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
      <Tabs defaultActiveKey={optionSelected} onChange={handleChange}>
        <Tabs.TabPane tab="Person" key={CRUDTabMenuOptions.Person} />
        <Tabs.TabPane tab="Role" key={CRUDTabMenuOptions.Role} />
        <Tabs.TabPane tab="Contact Type" key={CRUDTabMenuOptions.ContactType} />
      </Tabs>
      {children}
    </div>
  );
};
