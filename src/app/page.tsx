'use client'

import { v4 } from 'uuid';
import { TaskInterface } from '@/utils/Types';
import React, { useState } from 'react';
import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';
import GPTActions from '@/components/GPTActions';
 
const Home = () => {
  const [tasks, setTasks] = useState<Array<TaskInterface>>([]);
  
  const addTask = (text: string) => {
    setTasks([...tasks, { id:  v4(), description: text }]);
  };
  
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <TaskForm addTask={addTask} />

      { tasks?.length && <GPTActions tasks={tasks} /> }
      
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};
 
export default Home;