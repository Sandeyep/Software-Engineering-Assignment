import React from 'react';

const ToDo = ({ tasks }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Tasks</h1>
      
      {tasks.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No tasks available</p>
      ) : (
        <div className="space-y-6">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
              <p className="text-gray-600 mt-2">{task.description}</p>
              <p className="mt-4 text-sm text-gray-500">
                Task Date: 
                <span className="font-semibold">
                  {new Date(task.date).toLocaleDateString()} {/* Format the date */}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToDo;
