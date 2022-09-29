import { Button, Checkbox, Form, Input, Modal, Select } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useCompany } from '../../../../hooks/useCompany';
import { useContactType } from '../../../../hooks/useContactType';
import { useDepartment } from '../../../../hooks/useDepartment';
import { usePerson } from '../../../../hooks/usePerson';
import { useRole } from '../../../../hooks/useRole';
import { CreatePersonForm, Person } from '../../../../types/person';

type CreatePersonProps = {
  disabled?: boolean;
  editMode?: boolean;
  selectedPerson?: Person;
  refetch: () => Promise<void>;
};

export const CreateEditPerson: FC<CreatePersonProps> = ({
  disabled,
  editMode,
  selectedPerson,
  refetch,
}) => {
  const [form] = Form.useForm<CreatePersonForm>();
  const { createPerson, editPerson } = usePerson();
  const { companyOptions } = useCompany();
  const { roleOptions } = useRole();
  const { departmentOptions } = useDepartment();
  const { contactTypeOptions } = useContactType();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);

  const handleSubmit = async (values: CreatePersonForm) => {
    if (editMode) await editPerson({ id: selectedPerson!.id, ...values });
    else await createPerson(values);
    await refetch();
    setIsModalVisible(false);
  };

  const handleCancel = () => setIsModalVisible(false);

  useEffect(() => {
    if (!isModalVisible) form.resetFields();
    if (isModalVisible && editMode) {
      form.setFieldsValue({ ...selectedPerson });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalVisible]);

  return (
    <>
      <Button disabled={disabled} onClick={showModal}>
        {editMode ? 'Edit' : 'Create'}
      </Button>
      <Modal
        title="Create Person"
        visible={isModalVisible}
        onOk={form.submit}
        okText="Submit"
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item name="firstName" label="First Name">
            <Input />
          </Form.Item>
          <Form.Item name="middleName" label="Middle Name">
            <Input />
          </Form.Item>
          <Form.Item name="lastName" label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item name="staff" label="Staff">
            <Checkbox />
          </Form.Item>
          <Form.Item name="companyId" label="Company">
            <Select options={companyOptions} />
          </Form.Item>
          <Form.Item name="departmentId" label="Department">
            <Select options={departmentOptions} />
          </Form.Item>
          <Form.Item name="roleId" label="Role">
            <Select options={roleOptions} />
          </Form.Item>
          <Form.Item name="contactTypeId" label="Contact Type">
            <Select options={contactTypeOptions} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
