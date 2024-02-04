import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import { useAppStore } from "./store";
import { v4 as uuidv4 } from "uuid";
import Joke from "./components/Joke";

const App: React.FC = () => {
  const { data, search } = useAppStore();

  const dataFilter = React.useMemo(() => {
    if (!search) return data;

    return data.map((task) => {
      return {
        ...task,
        items: task.items.filter((item) => {
          const searchLower = search.toLowerCase();
          const taskTitleLower = item.title.toLowerCase();

          const index = taskTitleLower.indexOf(searchLower);

          return index !== -1;
        }),
      };
    });
  }, [search, data]);

  return (
    <>
      <div className="min-h-screen w-full flex justify-center px-10 py-5 mx-auto">
        <div className="flex flex-col w-full pb-4">
          <h1 className="text-2xl mb-8">My Task List</h1>
          <Header />
          <div className="flex overflow-x-auto space-x-8 mt-3">
            {dataFilter.map((item, index) => {
              return <Container key={uuidv4()} index={index + 1} {...item} />;
            })}
          </div>
          <Joke />
        </div>
      </div>
    </>
  );
};

export default App;
