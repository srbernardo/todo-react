import { IoMdClose } from "react-icons/io";

function Task({ task }: { task: {id: string, title: string, completed: boolean} }) {
  return (
    <>
      <li className="flex items-center px-5 text-gray-500 border-b border-b-gray-200 py-4 group">
        <input type="checkbox" className="mr-2 accent-purple-500/25"/>
        <input 
          type="text" 
          value={task.title}
          className="w-full"
        />
        <IoMdClose className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </li>
    </>
  )
}

export default Task