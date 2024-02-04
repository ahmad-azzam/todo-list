import React from "react";
import { TaskType } from "../../../store/type";
import clsx from "clsx";

type HeaderContainerProps = {
  title: string;
  id: TaskType;
};

const HeaderContainer: React.FC<HeaderContainerProps> = ({ title, id }) => {
  return (
    <div
      className={clsx(
        "border-t-2 border-b rounded-t-xl p-3 shadow-sm text-sm",
        id === "todo" && "border-gray-500",
        id === "in-progress" && "border-blue-500",
        id === "complete" && "border-green-500"
      )}
    >
      {title}
    </div>
  );
};

export default HeaderContainer;
