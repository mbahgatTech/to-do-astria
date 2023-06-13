'use client'

import React, { useState } from 'react';
 
const TodoForm = ({ addTask }: { addTask: (text: string) => any }) => {
  const [text, setText] = useState('');
 
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!text) return;

    addTask(text);
    setText('');
  };
 
  return (
    <form onSubmit={handleSubmit} className='flex self-center justify-center m-4 w-[70%]'>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add Task..."
        className='flex-1 text-black p-2 rounded-xl border-2 border-gray-500 right-0 self-center'
      />
    </form>
  );
};
 
export default TodoForm;