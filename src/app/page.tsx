'use client'

import { v4 } from 'uuid';
import { TaskInterface } from '@/utils/Types';
import React, { useState } from 'react';
import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';
 

const Home = () => {
  const [todos, setTodos] = useState<Array<TaskInterface>>([]);
  
  const addTodo = (text: string) => {
    setTodos([...todos, { id:  v4(), description: text }]);
  };
  
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <TaskForm addTask={addTodo} />
      <TaskList tasks={todos} deleteTask={deleteTodo} />
    </div>
  );
};
 
export default Home;