import { TaskInterface } from '@/utils/Types';
import React from 'react';


const TaskList = ({ tasks, deleteTask } : { tasks: Array<TaskInterface>, deleteTask: (id: string) => void }) => {
  return (
    <ul>
      {
        tasks.map(todo => (
            <li key={todo.id} className='p-2 rounded-xl m-3 border-gray-700 bg-white'>
              <span className='text-black m-3'>{todo.description}</span>
              <button onClick={() => deleteTask(todo.id)} className='bg-red-700 p-0.5 rounded-md right-0 box-border h-[100%] w-16'>Delete</button>
            </li>
        ))
      }
    </ul>
  );
};
 
export default TaskList;