import React from 'react'

const TaskCard = ({ task, moveTask, column }) => {
    const handleMove = (newColumn) => {
      moveTask(task, column, newColumn);
    };
  
    return (
      <div className="task-card bg-gray-200 p-4 mb-4 rounded shadow-md">
        <p>{task.name}</p>
        <div className="mt-2">
          {column !== 'todo' && (
            <button onClick={() => handleMove('todo')} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">To Do</button>
          )}
          {column !== 'inProgress' && (
            <button onClick={() => handleMove('inProgress')} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">In Progress</button>
          )}
          {column !== 'done' && (
            <button onClick={() => handleMove('done')} className="bg-green-500 text-white px-2 py-1 rounded">Done</button>
          )}
        </div>
      </div>
    );
  };

export default TaskCard
