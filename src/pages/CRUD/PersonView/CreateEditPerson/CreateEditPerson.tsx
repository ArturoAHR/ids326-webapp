import { Button, Checkbox, Form, Input, Modal, Select } from 'antd';
import { FC, useEffect, useState } from 'react';
import { usePerson } from '../../../../hooks/usePerson';
import { CreatePersonForm, Person } from '../../../../types/person';

type CreatePersonProps = {
  disabled: boolean;
  editMode: boolean;
  selectedPerson: Person;
};

export const CreateEditPerson: FC<CreatePersonProps> = ({
  disabled,
  editMode,
  selectedPerson,
}) => {
  const [form] = Form.useForm<CreatePersonForm>();
  const { createPerson, editPerson } = usePerson();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);

  const handleSubmit = (values: CreatePersonForm) => {
    if (editMode) {
      editPerson({ id: selectedPerson.id, ...values });
      return;
    }
    createPerson(values);
  };

  const handleCancel = () => setIsModalVisible(false);

  useEffect(() => {
    if (!isModalVisible) form.resetFields();
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
        okButtonProps={{ disabled: !form.isFieldsTouched() }}
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
            <Select />
          </Form.Item>
          <Form.Item name="departmentId" label="Department">
            <Select />
          </Form.Item>
          <Form.Item name="roleId" label="Role">
            <Select />
          </Form.Item>
          <Form.Item name="contactTypeId" label="Contact Type">
            <Select />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
