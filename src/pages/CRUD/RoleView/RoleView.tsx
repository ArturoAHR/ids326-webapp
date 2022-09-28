import { Button, Col, Row, Table } from 'antd';
import { FC, useState } from 'react';
import { useRole } from '../../../hooks/useRole';
import { Role } from '../../../types/role';

import './RoleView.css';

export const RoleView: FC = () => {
  const { roles } = useRole();

  const [selectedRole, setSelectedRole] = useState<Role>();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
  ];

  return (
    <div className="crud-role-container">
      <Row className="crud-role-button-group" gutter={16} justify={'end'}>
        <Col>Button</Col>
        <Col>Button</Col>
        <Col>
          <Button disabled={!selectedRole}>Delete</Button>
        </Col>
      </Row>
      <div className="crud-role-table">
        <Table
          columns={columns}
          dataSource={roles}
          scroll={{ x: 'max-content', y: 400 }}
          rowKey={(role) => role.id}
          rowSelection={{
            type: 'radio',
            onSelect: (role) => {
              setSelectedRole(role);
            },
          }}
        />
      </div>
    </div>
  );
};
