import { Row, Col, Button, Table } from 'antd';
import { FC, useState } from 'react';
import { useDepartment } from '../../../hooks/useDepartment';
import { Department } from '../../../types/department';
import { CreateEditDepartment } from './CreateEditDepartment/CreateEditDepartment';

import './DepartmentView.css';

export const DepartmentView: FC = () => {
  const { departments, fetchDepartments, deleteDepartment } = useDepartment();

  const [selectedDepartment, setSelectedDepartment] = useState<Department>();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 250,
    },
    {
      title: 'Code',
      dataIndex: 'code',
      width: 150,
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
  ];

  const handleDelete = () => {
    deleteDepartment({ id: selectedDepartment!.id });
  };

  return (
    <div className="crud-department-container">
      <Row className="crud-department-button-group" gutter={16} justify={'end'}>
        <Col>
          <CreateEditDepartment refetch={fetchDepartments} />
        </Col>
        <Col>
          <CreateEditDepartment
            editMode
            disabled={!selectedDepartment}
            selectedDepartment={selectedDepartment}
            refetch={fetchDepartments}
          />
        </Col>
        <Col>
          <Button disabled={!selectedDepartment} onClick={handleDelete}>
            Delete
          </Button>
        </Col>
      </Row>
      <div className="crud-department-table">
        <Table
          columns={columns}
          dataSource={departments}
          scroll={{ x: 'max-content', y: 400 }}
          rowKey={(department) => department.id}
          rowSelection={{
            type: 'radio',
            onSelect: (department) => {
              setSelectedDepartment(department);
            },
          }}
        />
      </div>
    </div>
  );
};
