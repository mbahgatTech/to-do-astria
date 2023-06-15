'use client'

import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';
import GPTActions from '@/components/GPTActions';
import React, { useState } from 'react';
import { v4 } from 'uuid';
import { TaskInterface } from '@/utils/interfaces';
import { MessagesProvider } from '@/utils/useMessages';
 
const Home = () => {
  const [tasks, setTasks] = useState<Array<TaskInterface>>([]);
  
  const addTask = (text: string) => {
    setTasks([...tasks, { id:  v4(), description: text }]);
  };
  
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(todo => todo.id !== id));
  };
  
  return (
    <MessagesProvider>
      <div>
        <TaskForm addTask={addTask} />

        { tasks?.length > 0 && <GPTActions tasks={tasks} /> }
        
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </MessagesProvider>
  );
};
 
export default Home;
