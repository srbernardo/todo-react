import Task from "./Task";

function TaskList({tasks, onTaskChange}: {tasks: {id: string, title: string, completed: boolean}[], onTaskChange: (task: {id: string, title: string, completed: boolean}) => void}) {

  return (
    <>
      <ul className="flex flex-col rounded-lg bg-white shadow-lg shadow-indigo-500/25">
        <div className="flex px-2 py-2 justify-between text-gray-400 border-b border-b-gray-200 mx-2">
          <div>items</div>
          <div>filtros</div>
          <div>clear completed</div>
        </div>
        {tasks.map((task) => (
          <Task 
            key={task.id}
            task={task}
            onTaskChange={onTaskChange}
          />
        ))}
      </ul>
    </>
  )
}

export default TaskList