import { useState } from "react";
import { v4 } from "uuid";

import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

function Home() {
  let tasksMock = [
    {id: v4(), title: 'Take the dog for a walk', completed: false},
    {id: v4(), title: 'Throw the trash away', completed: false},
  ];

  const [tasks, setTasks] = useState(tasksMock);

  const saveTask = (taskTitle: string) => {
    setTasks([...tasks, {id: v4(), title: taskTitle, completed: false}]);
  }

  const updateTask = (task: {id: string, title: string, completed: boolean}) => {
    setTasks(tasks.map((t) => t.id === task.id ? task : t));
  }
  
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col mt-16 w-[500px]">
          <h1 className="text-5xl font-bold subpixel-antialiased tracking-wider mb-6">TODO</h1>
          <AddTask onSaveTask={saveTask}/>
          <TaskList tasks={tasks} onTaskChange={updateTask}/>
        </div>
      </div>
    </>
  );
}

export default Home;
