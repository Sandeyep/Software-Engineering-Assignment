import React from 'react'
import TaskColumn from './Taskcolumn';

const TaskBoard = ({ tasks, moveTask, addTask }) => {
    return (
      <div className="task-board">
        <h2 className="text-center text-2xl mb-6">Task Management</h2>
        <div className="task-board-columns flex justify-around">
          <TaskColumn
            title="To Do"
            tasks={tasks.todo}
            moveTask={moveTask}
            column="todo"
            addTask={addTask}
          />
          <TaskColumn
            title="In Progress"
            tasks={tasks.inProgress}
            moveTask={moveTask}
            column="inProgress"
            addTask={addTask}
          />
          <TaskColumn
            title="Done"
            tasks={tasks.done}
            moveTask={moveTask}
            column="done"
            addTask={addTask}
          />
        </div>
      </div>
    );
  };
  

export default TaskBoard
