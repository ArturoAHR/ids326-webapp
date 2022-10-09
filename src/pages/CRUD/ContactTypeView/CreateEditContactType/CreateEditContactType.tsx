import { Button, Form, Input, Modal } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useContactType } from '../../../../hooks/useContactType';
import {
  CreateContactTypeForm,
  ContactType,
} from '../../../../types/contact-type';

type CreateContactTypeProps = {
  disabled?: boolean;
  editMode?: boolean;
  selectedContactType?: ContactType;
  refetch: () => Promise<void>;
};

export const CreateEditContactType: FC<CreateContactTypeProps> = ({
  disabled,
  editMode,
  selectedContactType,
  refetch,
}) => {
  const [form] = Form.useForm<CreateContactTypeForm>();
  const { createContactType, editContactType } = useContactType();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);

  const handleSubmit = async (values: CreateContactTypeForm) => {
    if (editMode)
      await editContactType({ id: selectedContactType!.id, ...values });
    else await createContactType(values);
    await refetch();
    setIsModalVisible(false);
  };

  const handleCancel = () => setIsModalVisible(false);

  useEffect(() => {
    if (!isModalVisible) form.resetFields();
    if (isModalVisible && editMode) {
      form.setFieldsValue({ ...selectedContactType });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalVisible]);

  return (
    <>
      <Button disabled={disabled} onClick={showModal}>
        {editMode ? 'Edit' : 'Create'}
      </Button>
      <Modal
        title="Create Contact Type"
        visible={isModalVisible}
        onOk={form.submit}
        okText="Submit"
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item name="name" label="Name">
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
