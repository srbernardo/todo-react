import { IoMdClose } from "react-icons/io";
import type { TaskProps } from "../types";

interface TaskComponentProps {
  task: TaskProps;
  onTaskChange: (task: TaskProps) => void;
  onTaskRemove: (taskId: string) => void;
  onTaskComplete: (taskId: string) => void;
}

function Task({ 
  task, 
  onTaskChange, 
  onTaskRemove, 
  onTaskComplete 
}: TaskComponentProps) {
  
  return (
    <>
      <li key={task.id} className="flex items-center px-5 text-gray-500 border-b border-b-gray-200 py-4 group">
        <input 
          type="checkbox" 
          className="mr-2 accent-purple-500/25"
          onClick={() => onTaskComplete(task.id)} 
          checked={task.completed} 
        />
        <input 
          type="text" 
          value={task.title}
          className={task.completed ? "w-full line-through text-gray-400" : "w-full"}
          onChange={(e) => onTaskChange({...task, title: e.target.value})}
        />
        <IoMdClose 
         className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:text-red-500" 
         onClick={() => onTaskRemove(task.id)} 
        />
      </li>
    </>
  )
}

export default Task
