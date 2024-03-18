import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskManager from './TaskManager'; 
import Textboxes from './TextBoxes'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Textboxes />} /> 
        <Route path="/tasks" element={<TaskManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
