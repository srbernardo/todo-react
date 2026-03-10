import { useState, useEffect } from "react";
import { v4 } from "uuid";

import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import type { TaskProps } from "../types";

function Home() {
  let tasksMock = [
    {id: v4(), title: 'Take the dog for a walk', completed: true},
    {id: v4(), title: 'Throw the trash away', completed: false},
  ];

  const [allTasks, setAllTasks] = useState<TaskProps[]>(
    JSON.parse(localStorage.getItem('tasks') || JSON.stringify(tasksMock))
  );
  const [tasks, setTasks] = useState(allTasks);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  useEffect(() => {
    if (filter === 'all') {
      setTasks(allTasks);
    } else if (filter === 'completed') {
      setTasks(allTasks.filter((t) => t.completed));
    } else if (filter === 'pending') {
      setTasks(allTasks.filter((t) => !t.completed));
    }
  }, [filter, allTasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  }, [allTasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
      const data = await response.json();

      console.log(data);

      const tasks = data.map((task: any) => ({
        id: v4(),
        title: task.title.charAt(0).toUpperCase() + task.title.slice(1),
        completed: task.completed
      }));

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    fetchTasks();
  }, [])

  const saveTask = (taskTitle: string) => {
    setAllTasks([...allTasks, {id: v4(), title: taskTitle, completed: false}]);
  }

  const updateTask = (task: TaskProps) => {
    setAllTasks(allTasks.map((t) => t.id === task.id ? task : t));
  }

  const completeTask = (taskId: string) => {
    setAllTasks(allTasks.map((t) => t.id === taskId ? {...t, completed: !t.completed} : t));
  }
  
  const removeTask = (taskId: string) => {
    setAllTasks(allTasks.filter((t) => t.id !== taskId));
  }

  const clearCompleted = () => {
    setAllTasks(allTasks.filter((t) => !t.completed));
  }

  const filterTasksCompleted = () => {
    setFilter('completed');
  }

  const filterTasksPending = () => {
    setFilter('pending');
  }

  const filterTasksAll = () => {
    setFilter('all');
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
            onFilterTasksCompleted={filterTasksCompleted}
            onFilterTasksPending={filterTasksPending}
            onFilterTasksAll={filterTasksAll}
            currentFilter={filter}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
