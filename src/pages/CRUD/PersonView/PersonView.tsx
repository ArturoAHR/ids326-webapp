import { usePerson } from '../../../hooks/usePerson';
import { Table, Row, Col, Button } from 'antd';

import './PersonView.css';
import { Company } from '../../../types/company';
import { Role } from '../../../types/role';
import { ContactType } from '../../../types/contact-type';
import { FC, useState } from 'react';
import { Person } from '../../../types/person';
import { CreateEditPerson } from './CreateEditPerson/CreateEditPerson';

export const PersonView: FC = () => {
  const { people, deletePerson } = usePerson();

  const [selectedPerson, setSelectedPerson] = useState<Person>();

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
    },
    {
      title: 'Middle Name',
      dataIndex: 'middleName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Staff',
      dataIndex: 'staff',
      render: (item: boolean) => {
        return <>{item}</>;
      },
    },
    {
      title: 'Company',
      dataIndex: 'company',
      render: (item: Company) => {
        return item.name;
      },
    },
    {
      title: 'Role',
      dataIndex: 'role',
      render: (item: Role) => {
        return item.name;
      },
    },
    {
      title: 'Contact Type',
      dataIndex: 'contactType',
      render: (item: ContactType) => {
        return item.name;
      },
    },
    {
      title: 'Department',
      dataIndex: 'department',
      render: (item: ContactType) => {
        return item.name;
      },
    },
  ];

  const handleDelete = () => {
    deletePerson({ id: selectedPerson!.id });
  };

  return (
    <div className="crud-person-container">
      <Row className="crud-person-button-group" gutter={16} justify={'end'}>
        <Col>
          <CreateEditPerson />
        </Col>
        <Col>
          <CreateEditPerson
            editMode
            disabled={!selectedPerson}
            selectedPerson={selectedPerson}
          />
        </Col>
        <Col>
          <Button disabled={!selectedPerson} onClick={handleDelete}>
            Delete
          </Button>
        </Col>
      </Row>
      <div className="crud-person-table">
        <Table
          columns={columns}
          dataSource={people}
          scroll={{ x: 'max-content', y: 400 }}
          rowKey={(person) => person.id}
          rowSelection={{
            type: 'radio',
            onSelect: (person) => {
              setSelectedPerson(person);
            },
          }}
        />
      </div>
    </div>
  );
};
