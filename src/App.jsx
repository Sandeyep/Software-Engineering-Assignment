import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskManagement from './pages/TaskManagement';
import AddTask from './pages/AddTask';
import ToDo from './pages/ToDo';

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Add task function to update tasks and store them in localStorage
  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/taskM" element={<TaskManagement />} />
        <Route path="/addtask" element={<AddTask addTask={addTask} />} />
        <Route path="/todo" element={<ToDo tasks={tasks} />} />
      </Routes>
    </>
  );
}

export default App;
