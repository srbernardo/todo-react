import type { TaskProps, FilterType } from "../types";
import Task from "./Task";
interface TaskListProps {
  tasks: TaskProps[],
  onTaskChange: (task: TaskProps) => void,
  onTaskRemove: (taskId: string) => void,
  onClearCompleted: () => void,
  onTaskComplete: (taskId: string) => void,
  onFilterTasksCompleted: () => void,
  onFilterTasksPending: () => void,
  onFilterTasksAll: () => void,
  currentFilter: FilterType
}

function TaskList({
  tasks, 
  onTaskChange, 
  onTaskRemove, 
  onClearCompleted, 
  onTaskComplete,
  onFilterTasksCompleted,
  onFilterTasksPending,
  onFilterTasksAll,
  currentFilter
}: TaskListProps) {

  const getFilterClass = (filter: FilterType) => {
    const baseClass = "cursor-pointer border px-2 rounded transition-colors duration-200";
    const activeClass = "text-blue-500 border-blue-500";
    const inactiveClass = "border-gray-500 hover:text-blue-500 hover:border-blue-500";
    
    return `${baseClass} ${currentFilter === filter ? activeClass : inactiveClass}`;
  }

  return (
    <>
      <ul className="flex flex-col rounded-lg bg-white shadow-lg shadow-indigo-500/25">
        <div className="flex px-2 py-2 justify-between text-gray-400 border-b border-b-gray-200 mx-2">
          <div>items {tasks.length}</div>
          <div className="flex justify-evenly">
            <span 
              className={getFilterClass('completed')} 
              onClick={onFilterTasksCompleted}
            >
              completed
            </span>
            <span 
              className={getFilterClass('pending')} 
              onClick={onFilterTasksPending}
            >
              active
            </span>
            <span 
              className={getFilterClass('all')} 
              onClick={onFilterTasksAll}
            >
              all
            </span>
          </div>
          <div> <span className="cursor-pointer hover:text-red-500" onClick={onClearCompleted}>clear completed</span> </div>
        </div>
        {tasks.map((task) => (
          <Task 
            key={task.id}
            task={task}
            onTaskChange={onTaskChange}
            onTaskRemove={onTaskRemove}
            onTaskComplete={onTaskComplete}
          />
        ))}
      </ul>
    </>
  )
}

export default TaskList
