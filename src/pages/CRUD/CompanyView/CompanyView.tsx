import { Row, Col, Button, Table } from 'antd';
import { FC, useState } from 'react';
import { useCompany } from '../../../hooks/useCompany';
import { Company } from '../../../types/company';
import { Person } from '../../../types/person';

import './CompanyView.css';
import { CreateEditCompany } from './CreateEditCompany/CreateEditCompany';

export const CompanyView: FC = () => {
  const { companies, fetchCompanies, deleteCompany } = useCompany();

  const [selectedCompany, setSelectedCompany] = useState<Company>();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 250,
    },
    {
      title: 'Ceo',
      dataIndex: 'ceo',
      render: (item: Person) => {
        if (!item) return '-';
        return `${item.firstName} ${item.lastName}`;
      },
    },
    {
      title: 'Primary Phone',
      dataIndex: 'primaryPhone',
    },
    {
      title: 'Secondary Phone',
      dataIndex: 'secondaryPhone',
    },
    {
      title: 'Fax',
      dataIndex: 'fax',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
    },
  ];

  const handleDelete = () => {
    deleteCompany({ id: selectedCompany!.id });
    setSelectedCompany(undefined);
  };

  return (
    <div className="crud-company-container">
      <Row className="crud-company-button-group" gutter={16} justify={'end'}>
        <Col>
          <CreateEditCompany refetch={fetchCompanies} />
        </Col>
        <Col>
          <CreateEditCompany
            editMode
            disabled={!selectedCompany}
            selectedCompany={selectedCompany}
            refetch={fetchCompanies}
          />
        </Col>
        <Col>
          <Button disabled={!selectedCompany} onClick={handleDelete}>
            Delete
          </Button>
        </Col>
      </Row>
      <div className="crud-company-table">
        <Table
          columns={columns}
          dataSource={companies}
          scroll={{ x: 'max-content', y: 400 }}
          rowKey={(company) => company.id}
          rowSelection={{
            type: 'radio',
            onSelect: (company) => {
              setSelectedCompany(company);
            },
          }}
        />
      </div>
    </div>
  );
};
