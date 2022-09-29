import { FC, ReactNode } from 'react';
import { Tabs } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import './CRUD.css';

type CRUDProps = {
  children?: ReactNode;
};

enum CRUDTabMenuOptions {
  Person = '/hw-1/crud/person',
  Role = '/hw-1/crud/role',
  ContactType = '/hw-1/crud/contact-type',
}

export const CRUD: FC<CRUDProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (value: string) => {
    navigate(value);
  };

  return (
    <div className="crud-menu-container">
      <h1 className="crud-menu-title">CRUD</h1>
      <Tabs
        activeKey={location.pathname}
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
