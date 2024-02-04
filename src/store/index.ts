import { create } from "zustand";
import { Action, State } from "./type";
import { v4 as uuidv4 } from "uuid";

const initialState: State = {
  showModal: false,
  data: [
    {
      id: "todo",
      title: "To Do",
      items: [
        {
          id: uuidv4(),
          status: "todo",
          title: "Task 1",
        },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      items: [],
    },
    {
      id: "complete",
      title: "Complete",
      items: [],
    },
  ],
  selectedData: {
    id: "",
    status: "todo",
    title: "",
  },
  search: "",
  isFirst: true,
};

export const useAppStore = create<State & Action>((set) => ({
  ...initialState,
  setShowModal: () => set((state) => ({ showModal: !state.showModal })),
  setData: (payload) =>
    set((state) => {
      const findTypeTask = state.data.find(
        (item) => item.id === payload.status
      );

      findTypeTask?.items.push(payload);

      return { ...state };
    }),
  editData: (payload) =>
    set((state) => {
      state.data.forEach((task) => {
        const findItem = task.items.find((item) => item.id === payload.id);

        if (findItem) {
          task.items = task.items.filter((item) => item.id !== findItem.id);
        }
      });

      const findTypeTask = state.data.find(
        (item) => item.id === payload.status
      );

      findTypeTask?.items.push(payload);

      return { ...state };
    }),
  deleteData: (payload) =>
    set((state) => {
      state.data.forEach((task) => {
        const findItem = task.items.find((item) => item.id === payload.id);

        if (findItem) {
          task.items = task.items.filter((item) => item.id !== findItem.id);
        }
      });

      return { ...state };
    }),
  setSelectedData: (payload) => set(() => ({ selectedData: payload })),
  setSearch: (value) => set(() => ({ search: value })),
  setIsFirst: () => set(() => ({ isFirst: false })),
}));
