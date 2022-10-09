import { Button, Modal, Input, Form } from 'antd';
import { FC, useState, useEffect } from 'react';
import { useDepartment } from '../../../../hooks/useDepartment';
import { Department, CreateDepartmentForm } from '../../../../types/department';

type CreateDepartmentProps = {
  disabled?: boolean;
  editMode?: boolean;
  selectedDepartment?: Department;
  refetch: () => Promise<void>;
};

export const CreateEditDepartment: FC<CreateDepartmentProps> = ({
  disabled,
  editMode,
  selectedDepartment,
  refetch,
}) => {
  const [form] = Form.useForm<CreateDepartmentForm>();
  const { createDepartment, editDepartment } = useDepartment();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);

  const handleSubmit = async (values: CreateDepartmentForm) => {
    if (editMode)
      await editDepartment({ id: selectedDepartment!.id, ...values });
    else await createDepartment(values);
    await refetch();
    setIsModalVisible(false);
  };

  const handleCancel = () => setIsModalVisible(false);

  useEffect(() => {
    if (!isModalVisible) form.resetFields();
    if (isModalVisible && editMode) {
      form.setFieldsValue({ ...selectedDepartment });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalVisible]);

  return (
    <>
      <Button disabled={disabled} onClick={showModal}>
        {editMode ? 'Edit' : 'Create'}
      </Button>
      <Modal
        title="Create Department"
        visible={isModalVisible}
        onOk={form.submit}
        okText="Submit"
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="code" label="Code">
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
