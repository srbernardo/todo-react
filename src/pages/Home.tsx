import { useState } from "react";
import { v4 } from "uuid";

import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import type { TaskProps } from "../types";

function Home() {
  let tasksMock = [
    {id: v4(), title: 'Take the dog for a walk', completed: true},
    {id: v4(), title: 'Throw the trash away', completed: false},
  ];

  const [tasks, setTasks] = useState(tasksMock);

  const saveTask = (taskTitle: string) => {
    setTasks([...tasks, {id: v4(), title: taskTitle, completed: false}]);
  }

  const updateTask = (task: TaskProps) => {
    setTasks(tasks.map((t) => t.id === task.id ? task : t));
  }

  const completeTask = (taskId: string) => {
    setTasks(tasks.map((t) => t.id === taskId ? {...t, completed: !t.completed} : t));
  }
  
  const removeTask = (taskId: string) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  const clearCompleted = () => {
    setTasks(tasks.filter((t) => !t.completed));
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col mt-16 w-[450px]">
          <h1 className="text-5xl font-bold subpixel-antialiased tracking-wider mb-6">TODO</h1>
          <AddTask onSaveTask={saveTask}/>
          <TaskList 
            tasks={tasks} 
            onTaskChange={updateTask}
            onTaskRemove={removeTask}
            onClearCompleted={clearCompleted}
            onTaskComplete={completeTask}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
