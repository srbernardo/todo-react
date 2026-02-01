import { IoMdClose } from "react-icons/io";

function Task({ task, onTaskChange }: { task: {id: string, title: string, completed: boolean}, onTaskChange: (task: {id: string, title: string, completed: boolean}) => void }) {  
  return (
    <>
      <li key={task.id} className="flex items-center px-5 text-gray-500 border-b border-b-gray-200 py-4 group">
        <input type="checkbox" className="mr-2 accent-purple-500/25"/>
        <input 
          type="text" 
          value={task.title}
          className="w-full"
          onChange={(e) => onTaskChange({...task, title: e.target.value})}
        />
        <IoMdClose className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </li>
    </>
  )
}

export default Task