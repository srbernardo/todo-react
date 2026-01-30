import { IoMdClose } from "react-icons/io";

import { useState } from "react";

import AddTask from "../components/AddTask";

function Home() {
  const [tasksValues, setTasksValues] = useState<string[]>([]);

  const saveTask = (taskTitle: string) => {
    setTasksValues([...tasksValues, taskTitle]);
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col mt-16 w-[500px]">
          <h1 className="text-5xl font-bold subpixel-antialiased tracking-wider mb-6">TODO</h1>
          <AddTask onSaveTask={saveTask}/>
          
          <ul className="flex flex-col rounded-lg bg-white shadow-lg shadow-indigo-500/25">
            <div className="flex px-2 py-2 justify-between text-gray-400 border-b border-b-gray-200 mx-2">
              <div>items</div>
              <div>filtros</div>
              <div>clear completed</div>
            </div>
            <li className="flex items-center px-5 text-gray-500 border-b border-b-gray-200 py-4 group">
              <input type="checkbox" className="mr-2 accent-purple-500/25" />
              <span>Task 1</span>
              <IoMdClose className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </li>
            <li className="flex items-center px-5 text-gray-500 border-b border-b-gray-200 py-4 group">
              <input type="checkbox" className="mr-2 accent-purple-500/25" />
              <span>Task 2</span>
              <IoMdClose className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
