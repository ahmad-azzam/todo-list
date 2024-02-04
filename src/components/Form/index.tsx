import React from "react";
import { Button, Form, Input, Select } from "antd";
import { FormTaskProps } from "./type";
import { useAppStore } from "../../store";
import { ItemContainerData, TaskType } from "../../store/type";
import { v4 as uuidv4 } from "uuid";

const FormTask: React.FC<FormTaskProps> = ({ buttonText, isEdit, setOpen }) => {
  const { setData, selectedData, editData } = useAppStore();
  const [form] = Form.useForm();

  const onFinish = (values: Record<string, string>) => {
    const payload: ItemContainerData = {
      id: isEdit ? selectedData.id : uuidv4(),
      status: values.status as TaskType,
      title: values.title,
    };
    isEdit ? editData(payload) : setData(payload);
    form.resetFields();
    setOpen(false);
  };

  return (
    <div className="flex flex-col">
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        initialValues={selectedData}
      >
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Task name must be filled" }]}
          label="Task Name"
        >
          <Input placeholder="Task Name" />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select
            className="w-full"
            options={[
              { value: "todo", label: "To Do" },
              { value: "in-progress", label: "In Progress" },
              { value: "complete", label: "Complete" },
            ]}
          />
        </Form.Item>
        <Button htmlType="submit">{buttonText}</Button>
      </Form>
    </div>
  );
};

export default FormTask;
