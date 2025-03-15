import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // Importing DatePicker for the date field
import 'react-datepicker/dist/react-datepicker.css'; // Importing DatePicker CSS

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date()); // State to store the selected date
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description) {
      const newTask = { title, description, date };

      // Add the task and show success message
      addTask(newTask);
      setSuccessMessage('Task added successfully!');

      // Redirect to the ToDo page after adding the task
      setTimeout(() => {
        navigate('/todo');
      }, 2000); // Wait for 2 seconds to show success message before redirecting
    }
  };

  return (
    <div className="w-[70%] mx-auto">
      <h1 className="text-3xl font-bold my-8 text-center">Add New Task</h1>
      <form onSubmit={handleSubmit} className="w-full mt-12 sm:mt-0 max-w-lg">
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-class"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-class"
          />
        </div>
        <div>
          <label>Task Date</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)} // Update the date state
            dateFormat="dd/MM/yyyy"
            className="input-class"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Add Task
        </button>
      </form>
      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
    </div>
  );
};

export default AddTask;
