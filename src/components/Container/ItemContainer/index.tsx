import React from "react";
import { ItemContainerData } from "../../../store/type";
import Edit from "./Edit";
import Delete from "./Delete";

type ItemContainerProps = {
  data: ItemContainerData;
};

const ItemContainer: React.FC<ItemContainerProps> = ({ data }) => {
  const { title } = data;

  return (
    <>
      <div className="w-full min-h-20 border flex justify-between p-2 rounded-md">
        {title}
        <div className="flex space-x-3">
          <Edit data={data} />
          <Delete data={data} />
        </div>
      </div>
    </>
  );
};

export default ItemContainer;
