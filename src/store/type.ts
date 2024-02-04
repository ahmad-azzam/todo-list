export type State = {
  showModal: boolean;
  data: ContainerData[];
  selectedData: ItemContainerData;
  search: string;
  isFirst: boolean;
};

export type Action = {
  setShowModal: () => void;
  setData: (payload: ItemContainerData) => void;
  editData: (payload: ItemContainerData) => void;
  deleteData: (payload: ItemContainerData) => void;
  setSelectedData: (payload: ItemContainerData) => void;
  setSearch: (value: string) => void;
  setIsFirst: () => void;
};

export type TaskType = "todo" | "in-progress" | "complete";

export type ContainerData = {
  id: TaskType;
  title: string;
  items: ItemContainerData[];
};

export type ItemContainerData = {
  id: string;
  title: string;
  status: TaskType;
};
