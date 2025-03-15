import React, { useState } from 'react';

const TaskManagerApp = () => {
  // Sample task data
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description of Task 1', status: 'Pending', dueDate: '2025-03-20' },
    { id: 2, title: 'Task 2', description: 'Description of Task 2', status: 'Completed', dueDate: '2025-03-15' },
    { id: 3, title: 'Task 3', description: 'Description of Task 3', status: 'Pending', dueDate: '2025-03-25' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Filter tasks based on search term and status
  const filteredTasks = tasks.filter((task) => {
    return (
      (filterStatus === 'All' || task.status === filterStatus) &&
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Function to handle task deletion
  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Function to handle adding a new task
  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: `New Task ${tasks.length + 1}`,
      description: `Description for New Task ${tasks.length + 1}`,
      status: 'Pending',
      dueDate: '2025-03-30',
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="bg-blue-600 w-full py-4 text-white text-center">
        <h1 className="text-3xl font-bold">Task Manager</h1>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="mb-6 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search Tasks"
            className="w-1/3 p-2 rounded border border-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Add Task Button */}
          <button
            onClick={handleAddTask}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add New Task
          </button>
        </div>

        {/* Task Status Filter */}
        <div className="mb-6">
          <select
            className="p-2 border border-gray-300 rounded"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Tasks</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Task List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.length === 0 ? (
            <p className="col-span-full text-center text-lg text-gray-500">No tasks found</p>
          ) : (
            filteredTasks.map((task) => (
              <div key={task.id} className="bg-white p-4 rounded shadow-md">
                <h2 className="font-bold text-xl">{task.title}</h2>
                <p className="text-gray-600">{task.description}</p>
                <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                <p className={`mt-2 text-sm ${task.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                  {task.status}
                </p>

                <div className="mt-4 flex justify-between">
                  {/* Edit Button (not functional in this example) */}
                  <button className="text-blue-500">Edit</button>
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskManagerApp;
