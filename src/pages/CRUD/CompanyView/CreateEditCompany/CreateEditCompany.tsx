import { Button, Form, Input, Modal, Select } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useCompany } from '../../../../hooks/useCompany';
import { usePerson } from '../../../../hooks/usePerson';
import { CreateCompanyForm, Company } from '../../../../types/company';

type CreateCompanyProps = {
  disabled?: boolean;
  editMode?: boolean;
  selectedCompany?: Company;
  refetch: () => Promise<void>;
};

export const CreateEditCompany: FC<CreateCompanyProps> = ({
  disabled,
  editMode,
  selectedCompany,
  refetch,
}) => {
  const [form] = Form.useForm<CreateCompanyForm>();
  const { createCompany, editCompany } = useCompany();
  const { personOptions } = usePerson();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);

  const handleSubmit = async (values: CreateCompanyForm) => {
    if (editMode) await editCompany({ id: selectedCompany!.id, ...values });
    else await createCompany(values);
    await refetch();
    setIsModalVisible(false);
  };

  const handleCancel = () => setIsModalVisible(false);

  useEffect(() => {
    if (!isModalVisible) form.resetFields();
    if (isModalVisible && editMode) {
      form.setFieldsValue({ ...selectedCompany });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalVisible]);

  return (
    <>
      <Button disabled={disabled} onClick={showModal}>
        {editMode ? 'Edit' : 'Create'}
      </Button>
      <Modal
        title="Create Company"
        visible={isModalVisible}
        onOk={form.submit}
        okText="Submit"
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="ceoId" label="Ceo">
            <Select options={personOptions} />
          </Form.Item>
          <Form.Item name="primaryPhone" label="Primary Phone">
            <Input />
          </Form.Item>
          <Form.Item name="secondaryPhone" label="Secondary Phone">
            <Input />
          </Form.Item>
          <Form.Item name="fax" label="Fax">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item name="website" label="Website">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
