import { Button, Col, Row, Table } from 'antd';
import { FC, useState } from 'react';
import { useRole } from '../../../hooks/useRole';
import { Role } from '../../../types/role';
import { CreateEditRole } from './CreateEditRole/CreateEditRole';

import './RoleView.css';

export const RoleView: FC = () => {
  const { roles, fetchRoles, deleteRole } = useRole();

  const [selectedRole, setSelectedRole] = useState<Role>();

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
    deleteRole({ id: selectedRole!.id });
    setSelectedRole(undefined);
  };

  return (
    <div className="crud-role-container">
      <Row className="crud-role-button-group" gutter={16} justify={'end'}>
        <Col>
          <CreateEditRole refetch={fetchRoles} />
        </Col>
        <Col>
          <CreateEditRole
            editMode
            disabled={!selectedRole}
            selectedRole={selectedRole}
            refetch={fetchRoles}
          />
        </Col>
        <Col>
          <Button disabled={!selectedRole} onClick={handleDelete}>
            Delete
          </Button>
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
