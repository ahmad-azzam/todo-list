import React from "react";
import { ItemContainerData } from "../../../store/type";
import Edit from "./Edit";
import Delete from "./Delete";
import Complete from "./Complete";

type ItemContainerProps = {
  data: ItemContainerData;
};

const ItemContainer: React.FC<ItemContainerProps> = ({ data }) => {
  const { title } = data;

  return (
    <div className="flex flex-col min-h-20 px-2 py-1 rounded-md w-full border">
      <div className="flex justify-between ">
        {title}
        <div className="flex space-x-3">
          <Edit data={data} />
          <Delete data={data} />
        </div>
      </div>
      {data.status !== "complete" && <Complete data={data} />}
    </div>
  );
};

export default ItemContainer;
