import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";

function AddTask({onSaveTask}: {onSaveTask: (taskTitle: string) => void}) {
  const [taskTitle, setTaskTitle] = useState('')

  const handleSaveTask = () => {
    if (taskTitle.trim()) {
      onSaveTask(taskTitle.trim());
      setTaskTitle('');
    }
  }

  return (
    <>
      <div className="flex space-x-2 items-center rounded-lg px-4 bg-white mb-4 shadow-lg">
        <CiCirclePlus size={26} color="gray" />
        <input
            className="px-1 py-3 text-lg text-gray-500"
            type="text"
            placeholder="Add a new task..."
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && handleSaveTask()}
          />        
      </div>  
    </>
  )
}

export default AddTask