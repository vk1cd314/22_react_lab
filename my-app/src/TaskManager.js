import React, { useState } from 'react';
import { Button, ListGroup, FormControl, Container, Row, Col, InputGroup } from 'react-bootstrap';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const addTask = () => {
    if (!newTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTitle.trim(),
      description: newDescription.trim(),
      isEditing: false,
    };
    setTasks([...tasks, newTask]);
    setNewTitle('');
    setNewDescription('');
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const startEditing = (task) => {
    setTasks(tasks.map(t =>
      t.id === task.id ? { ...t, isEditing: true } : t
    ));
    setEditTitle(task.title);
    setEditDescription(task.description);
  };

  const saveTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, title: editTitle, description: editDescription, isEditing: false } : task
    ));
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <h2>Add New Task</h2>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <FormControl
              placeholder="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              as="textarea" // Use a textarea for longer text input
              rows={3}
            />
            <Button variant="outline-secondary" onClick={addTask}>Add Task</Button>
          </InputGroup>
          <ListGroup>
            {tasks.map(task => (
              <ListGroup.Item key={task.id} className="d-flex flex-column">
                {task.isEditing ? (
                  <>
                    <FormControl
                      placeholder="Title"
                      defaultValue={task.title}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="mb-2"
                    />
                    <FormControl
                      placeholder="Description"
                      defaultValue={task.description}
                      onChange={(e) => setEditDescription(e.target.value)}
                      as="textarea"
                      rows={3}
                    />
                  </>
                ) : (
                  <>
                    <h5>{task.title}</h5>
                    <p>{task.description}</p>
                  </>
                )}
                <div>
                  {task.isEditing ? (
                    <Button variant="success" size="sm" onClick={() => saveTask(task.id)}>Save</Button>
                  ) : (
                    <Button variant="primary" size="sm" onClick={() => startEditing(task)}>Edit</Button>
                  )}
                  <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)} className="ms-2">Delete</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskManager;
