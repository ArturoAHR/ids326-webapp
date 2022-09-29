import { Row, Col, Button, Table } from 'antd';
import { useState } from 'react';
import { useContactType } from '../../../hooks/useContactType';
import { ContactType } from '../../../types/contact-type';
import { CreateEditContactType } from './CreateEditContactType/CreateEditContactType';

import './ContactTypeView.css';

export const ContactTypeView = () => {
  const { contactTypes, fetchContactTypes, deleteContactType } =
    useContactType();

  const [selectedContactType, setSelectedContactType] = useState<ContactType>();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 250,
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
  ];

  const handleDelete = () => {
    deleteContactType({ id: selectedContactType!.id });
  };

  return (
    <div className="crud-contact-type-container">
      <Row
        className="crud-contact-type-button-group"
        gutter={16}
        justify={'end'}
      >
        <Col>
          <CreateEditContactType refetch={fetchContactTypes} />
        </Col>
        <Col>
          <CreateEditContactType
            editMode
            disabled={!selectedContactType}
            selectedContactType={selectedContactType}
            refetch={fetchContactTypes}
          />
        </Col>
        <Col>
          <Button disabled={!selectedContactType} onClick={handleDelete}>
            Delete
          </Button>
        </Col>
      </Row>
      <div className="crud-contact-type-table">
        <Table
          columns={columns}
          dataSource={contactTypes}
          scroll={{ x: 'max-content', y: 400 }}
          rowKey={(contactType) => contactType.id}
          rowSelection={{
            type: 'radio',
            onSelect: (contactType) => {
              setSelectedContactType(contactType);
            },
          }}
        />
      </div>
    </div>
  );
};
