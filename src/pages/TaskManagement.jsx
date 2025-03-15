import React, { useState } from 'react';
import TaskBoard from '../components/Taskboard';

const TaskManagement = () => {
    const [tasks, setTasks] = useState({
      todo: [],
      inProgress: [],
      done: [],
    });
  
    const addTask = (column) => {
      const taskName = prompt('Enter task name:');
      if (taskName) {
        setTasks({
          ...tasks,
          [column]: [...tasks[column], { id: Date.now(), name: taskName }],
        });
      }
    };
  
    const moveTask = (task, fromColumn, toColumn) => {
      setTasks({
        ...tasks,
        [fromColumn]: tasks[fromColumn].filter((t) => t.id !== task.id),
        [toColumn]: [...tasks[toColumn], task],
      });
    };
  
    return (
      <div className="task-management-container p-4">
        <TaskBoard tasks={tasks} moveTask={moveTask} addTask={addTask} />
      </div>
    );
  };
  

export default TaskManagement
