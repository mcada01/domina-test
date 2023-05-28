import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import TaskList from './pages/TaskList';
import TaskRegistration from './pages/TaskRegistration';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/create-task" element={<TaskRegistration />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter >
  );
};

export default App;