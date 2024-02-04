import React from "react";
import { useAppStore } from "../../../../store";
import { ItemContainerData } from "../../../../store/type";
import { EditOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import withEditForm from "../../../Form/withEditForm";
import FormTask from "../../../Form";

const EditForm = withEditForm(FormTask);

type EditProps = {
  data: ItemContainerData;
};

const Edit: React.FC<EditProps> = ({ data }) => {
  const { setSelectedData, showModal, setShowModal } = useAppStore();
  // const [ setOpen] = React.useState<boolean>(false);

  const handleEdit = () => {
    setSelectedData(data);
    setShowModal();
  };

  return (
    <>
      <div className="cursor-pointer" onClick={handleEdit}>
        <EditOutlined />
      </div>
      <Modal
        title="Edit Task"
        open={showModal}
        onCancel={setShowModal}
        footer={null}
      >
        <EditForm setOpen={setShowModal} />
      </Modal>
    </>
  );
};

export default Edit;
