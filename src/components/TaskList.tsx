import Task from "./Task";

function TaskList({tasks, onTaskChange, onTaskRemove, onClearCompleted, onTaskComplete}: {
  tasks: {id: string, title: string, completed: boolean}[],
  onTaskChange: (task: {id: string, title: string, completed: boolean}) => void,
  onTaskRemove: (taskId: string) => void,
  onClearCompleted: () => void,
  onTaskComplete: (taskId: string) => void}) {

  return (
    <>
      <ul className="flex flex-col rounded-lg bg-white shadow-lg shadow-indigo-500/25">
        <div className="flex px-2 py-2 justify-between text-gray-400 border-b border-b-gray-200 mx-2">
          <div>items {tasks.length}</div>
          <div>filtros</div>
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