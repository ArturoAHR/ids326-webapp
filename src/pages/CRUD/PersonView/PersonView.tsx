import { usePerson } from '../../../hooks/usePerson';
import { Table, Row, Col, Button } from 'antd';

import './PersonView.css';
import { Company } from '../../../types/company';
import { Role } from '../../../types/role';
import { ContactType } from '../../../types/contact-type';
import { useState } from 'react';
import { Person } from '../../../types/person';

export const PersonView = () => {
  const { people, deletePerson } = usePerson();

  const [selectedPerson, setSelectedPerson] = useState<Person>();

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      width: 150,
    },
    {
      title: 'Middle Name',
      dataIndex: 'middleName',
      width: 150,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      width: 150,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      width: 150,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 150,
    },
    {
      title: 'Staff',
      dataIndex: 'staff',
      width: 150,
      render: (item: boolean) => {
        return <>{item}</>;
      },
    },
    {
      title: 'Company',
      dataIndex: 'company',
      width: 150,
      render: (item: Company) => {
        return item.name;
      },
    },
    {
      title: 'Role',
      dataIndex: 'role',
      width: 150,
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
          <Button>Create</Button>
        </Col>
        <Col>
          <Button disabled={!selectedPerson}>Edit</Button>
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
