import React, { useState } from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Textboxes = () => {
  const [textboxes, setTextboxes] = useState([]);

  const addTextbox = () => {
    const newTextbox = { id: Date.now(), value: '' };
    setTextboxes([...textboxes, newTextbox]);
  };

  const handleChange = (id, newValue) => {
    const updatedTextboxes = textboxes.map(textbox =>
      textbox.id === id ? { ...textbox, value: newValue } : textbox
    );
    setTextboxes(updatedTextboxes);
  };

  const deleteTextbox = (id) => {
    const filteredTextboxes = textboxes.filter(textbox => textbox.id !== id);
    setTextboxes(filteredTextboxes);
  };

  const calculateSum = () => {
    return textboxes.reduce((acc, textbox) => acc + Number(textbox.value || 0), 0);
  };

  return (
    <div className="app-container">
      <button onClick={addTextbox} className="add-btn">Add Textbox</button>
      {textboxes.map((textbox) => (
        <div key={textbox.id} className="textbox-container">
          <input
            type="number"
            value={textbox.value}
            onChange={(e) => handleChange(textbox.id, e.target.value)}
            className="input-textbox"
          />
          <button onClick={() => deleteTextbox(textbox.id)} className="delete-btn">Delete</button>
        </div>
      ))}
      <div className="sum-display">Sum: {calculateSum()}</div>
    </div>
  );
};

export default Textboxes;
