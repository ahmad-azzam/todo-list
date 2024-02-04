import React from "react";
import { ItemContainerData } from "../../../../store/type";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppStore } from "../../../../store";

type DeleteProps = {
  data: ItemContainerData;
};

const Delete: React.FC<DeleteProps> = ({ data }) => {
  const { deleteData } = useAppStore();

  const handleDelete = () => {
    deleteData(data);
  };

  return (
    <div className="cursor-pointer" onClick={handleDelete}>
      <DeleteOutlined className="text-red-500" />
    </div>
  );
};

export default Delete;
