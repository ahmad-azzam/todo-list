import React from "react";
import HeaderContainer from "./HeaderContainer";
import ItemContainer from "./ItemContainer";
import { ItemContainerData, TaskType } from "../../store/type";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

type ContainerProps = {
  title: string;
  items: ItemContainerData[];
  id: TaskType;
  index: number;
};

const Container: React.FC<ContainerProps> = ({ title, items, id, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index / 10 + 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex-shrink-0 w-80 flex flex-col space-y-8"
    >
      <HeaderContainer title={title} id={id} total={items.length} />
      <div className="flex flex-col space-y-3 h-[40vh] overflow-auto text-sm">
        {items.map((item) => {
          return <ItemContainer key={uuidv4()} data={item} />;
        })}
      </div>
    </motion.div>
  );
};

export default Container;
