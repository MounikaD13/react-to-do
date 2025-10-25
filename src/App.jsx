import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim() === '') {
      alert('Enter a task');
      return;
    }
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='todo text-center'>
      <h2 className='display-4'> To-Do</h2>
      <input type="text" placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)}/>
     
      <button onClick={handleAddTask}>Add Task</button>
      <div>
        <ul className='d-flex flex-column align-items-center'>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}{' '}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
