import React from 'react'
import TaskCard from './Taskcard';

const TaskColumn = ({ title, tasks, moveTask, column, addTask }) => {
    return (
      <div className="task-column border p-4 w-1/3">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <button onClick={() => addTask(column)} className="w-full mb-4 bg-blue-500 text-white py-2 rounded">Add Task</button>
        <div>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} moveTask={moveTask} column={column} />
          ))}
        </div>
      </div>
    );
  };

export default TaskColumn
