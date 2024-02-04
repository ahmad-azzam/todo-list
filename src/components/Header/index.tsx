import React from "react";
import { Button, Input, Modal } from "antd";
import { useAppStore } from "../../store";
import withAddForm from "../Form/withAddForm";
import FormTask from "../Form";

const AddForm = withAddForm(FormTask);

const Header: React.FC = () => {
  const {search, setSearch } = useAppStore();
  const [open, setOpen] = React.useState<boolean>(false)

  const handleAdd = () => {
    setOpen(true)
  }

  return (
    <>
      <div className="w-full py-3 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between">
        <div className="w-full sm:w-2/5">
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search task..."
            className="py-1"
          />
        </div>
        <div className="w-full sm:w-1/6">
          <Button onClick={handleAdd} className="w-full">
            Add Task
          </Button>
        </div>
      </div>

      <Modal
        title="Add Task"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <AddForm setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default Header;
