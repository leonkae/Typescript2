import './App.css';
import { Task } from './types/index';
import React,{ useState } from 'react';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>('');

  const addTask = () =>{
    if (input.trim() === '') return;
    const newTask: Task = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };
  
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
    </div>
  );
}

export default App;