import React from "react";
import { ItemContainerData } from "../../../../store/type";
import { useAppStore } from "../../../../store";

type CompleteProps = {
  data: ItemContainerData;
};

const Complete: React.FC<CompleteProps> = ({ data }) => {
  const { editData } = useAppStore();

  const handleClick = () => {
    const payload: ItemContainerData = {
      id: data.id,
      title: data.title,
      status: "complete",
    };
    editData(payload);
  };

  return (
    <div
      onClick={handleClick}
      className="mt-auto text-[8px] cursor-pointer text-teal-500"
    >
      mark this task complete
    </div>
  );
};

export default Complete;
